import { configureStore, Action, Reducer, Store } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PERSIST_STORE_NAME } from '@/constants/app.constant'
import rootReducer, { RootState, AsyncReducers } from './rootReducer'
import RtkQueryService from '@/services/RtkQueryService'

/* eslint-disable @typescript-eslint/no-explicit-any */
const middlewares: any[] = [RtkQueryService.middleware]

const persistConfig = {
  key: PERSIST_STORE_NAME,
  keyPrefix: 'store:',
  storage,
  whitelist: ['setting'],
}

interface CustomStore extends Store<RootState, Action> {
  asyncReducers?: AsyncReducers
}

const store: CustomStore = configureStore({
  reducer: persistReducer(persistConfig, rootReducer() as Reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
})

store.asyncReducers = {}

export const persistor = persistStore(store)

export function injectReducer<S>(key: string, reducer: Reducer<S, Action>) {
  if (store.asyncReducers) {
    if (store.asyncReducers[key]) {
      return false
    }
    store.asyncReducers[key] = reducer
    store.replaceReducer(
      persistReducer(
        persistConfig,
        rootReducer(store.asyncReducers) as Reducer,
      ),
    )
  }
  persistor.persist()
  return store
}

export type AppDispatch = typeof store.dispatch

export default store

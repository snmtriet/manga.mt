import RtkQueryService from '@/services/RtkQueryService'
import { Action, combineReducers, Reducer } from 'redux'
import setting, { SettingState } from './slices/setting/settingSlice'

export type RootState = {
  setting: SettingState
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [RtkQueryService.reducerPath]: any
}

export interface AsyncReducers {
  [key: string]: Reducer<any, Action>
}

const staticReducers = {
  setting,
  [RtkQueryService.reducerPath]: RtkQueryService.reducer,
}

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: Action) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    })
    return combinedReducer(state, action)
  }

export default rootReducer

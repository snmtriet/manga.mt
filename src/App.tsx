import { lazy, Suspense } from 'react'
import { cn } from './utils'
import { useAppSelector } from './store'
import { Loading } from './components/shared'

const MainLayoutLazy = lazy(() => import('./layouts/MainLayout'))

function App() {
  const { theme } = useAppSelector((state) => state.setting)
  return (
    <Suspense
      fallback={
        <div
          className={cn(
            'loading-center',
            theme === 'dark' ? 'bg-dark' : 'bg-light',
          )}
        >
          <Loading loading={true} type="preloader" />
        </div>
      }
    >
      <MainLayoutLazy />
    </Suspense>
  )
}

export default App

import { lazy, Suspense, useMemo } from 'react'
import { cn } from './utils'
import { useAppSelector } from './store'
import { Loading } from './components/shared'
import { useLocation } from 'react-router-dom'
import {
  LAYOUT_TYPE_DEFAULT,
  LAYOUT_TYPE_READ,
} from './constants/theme.constant'

const layouts = {
  default: lazy(() => import('./layouts/MainLayout')),
  read: lazy(() => import('./layouts/ReadLayout')),
}

function App() {
  const { pathname } = useLocation()
  const { theme } = useAppSelector((state) => state.setting)

  const AppLayout = useMemo(() => {
    if (pathname.includes(LAYOUT_TYPE_READ)) {
      return layouts[LAYOUT_TYPE_READ]
    } else {
      return layouts[LAYOUT_TYPE_DEFAULT]
    }
  }, [pathname])

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
      <AppLayout />
    </Suspense>
  )
}

export default App

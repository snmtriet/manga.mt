import { Routes } from '@/@types/routes'
import { lazy } from 'react'

const appsRoute: Routes = [
  {
    key: 'app.home',
    path: '/',
    component: lazy(() => import('@/views/Home')),
  },
  {
    key: 'app.manga-detail',
    path: '/manga/:slug',
    component: lazy(() => import('@/views/Manga')),
  },
  {
    key: 'app.read',
    path: '/read/:slug/:lang/:chapter',
    component: lazy(() => import('@/views/Read')),
  },
]

export default appsRoute

import { Navigate, Outlet } from 'react-router'
import NotFound from './pages/NotFound'
import HeaderOnlyLayout from '@src/components/Layouts/HeaderOnlyLayout'

export const staticRouteList = [
  {
    path: '/',
    element: (
      <HeaderOnlyLayout>
        <Outlet />
      </HeaderOnlyLayout>
    ),
    children: [
      {
        path: '/not-found',
        element: <NotFound />
      },
      { path: '*', element: <Navigate to='/not-found' replace /> }
    ]
  }
]

import AppLayout from '@src/components/Layouts/AppLayout'
// import { USER_ROLE } from '@src/configs'
// import RequireAuth from '@src/routes/RequireAuth'
import { Outlet } from 'react-router'
import Home from './pages/Home'

export const customerRouteList = [
  {
    path: '/',
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    )
  },
  {
    path: '/',
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: []
  }
]

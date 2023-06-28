import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Signup from './Signup'
import VerifyEmail from './VerifyEmail'

export const authRouteList = [
  {
    path: '/login',
    element: <Login />,
    children: []
  },
  {
    path: '/signup',
    element: <Signup />,
    children: []
  },
  {
    path: '/verify',
    element: <VerifyEmail />,
    children: []
  },
  {
    path: '/authorize',
    element: <ForgotPassword />,
    children: []
  }
]

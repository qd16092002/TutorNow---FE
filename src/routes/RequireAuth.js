import { isEmptyValue } from '@src/helpers/check'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router'

const RequireAuth = () => {
  const user = useSelector((state) => state.auth.user)
  const location = useLocation()

  console.log('user:: ', user)

  return !isEmptyValue(user) ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
}

export default RequireAuth

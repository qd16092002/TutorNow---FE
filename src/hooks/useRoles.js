import { useSelector } from 'react-redux'

const useRoles = () => {
  const user = useSelector((state) => state.auth.user)

  return user?.roles || []
}

export default useRoles

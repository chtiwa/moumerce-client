import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from './features/hooks'

const ProtectedRoute = () => {
  const { token } = useAppSelector(state => state.auth)

  return token !== '' ? (
    <Outlet />
  ) : (
    <Navigate to='/authentication' />
  )
}

export default ProtectedRoute

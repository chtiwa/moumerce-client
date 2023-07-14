import { Navigate } from 'react-router-dom'
import { useAppSelector } from './features/hooks'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAppSelector(state => state.auth)

  return token !== '' ? (
    { children }
  ) : (
    <Navigate to='/products' />
  )
}

export default ProtectedRoute

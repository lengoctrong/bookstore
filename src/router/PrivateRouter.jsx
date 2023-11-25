import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const userData = useSelector((state) => state.user.user)
  return userData ? children : <Navigate to="/login" />
}

export default PrivateRoute

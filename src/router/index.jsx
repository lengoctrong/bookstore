import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Layout from '../pages/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // home
      {
        path: '/',
        element: <Home />
      },
      // cart
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
  // login
  {
    path: 'login',
    element: <Login />
  },
  // signup
  {
    path: 'signup',
    element: <Signup />
  }
])

export default router

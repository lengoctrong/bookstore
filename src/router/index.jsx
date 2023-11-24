import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Cart from '../pages/Cart'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Shop from '../pages/Shop'

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
      },
      // detail
      {
        path: '/detail',
        element: <Detail />
      },
      // shop
      {
        path: '/shop',
        element: <Shop />
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

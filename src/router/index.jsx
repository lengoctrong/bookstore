import { createBrowserRouter } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'

import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
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
      // detail
      {
        path: '/detail',
        element: <Detail />
      },
      // shop
      {
        path: '/shop',
        element: <Shop />
      },
      // checkout
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
  // cart
  {
    path: '/cart',
    element: (
      <PrivateRouter>
        <Cart />
      </PrivateRouter>
    )
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

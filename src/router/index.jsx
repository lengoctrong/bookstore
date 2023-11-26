import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Cart from '../pages/Cart'
import Categories from '../pages/Categories'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
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
      // contact
      {
        path: '/contact',
        element: <Contact />
      },
      // checkout
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/profile',
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        )
      },
      {
        path: '/categories',
        element: <Categories />
      }
    ]
  },
  // cart
  {
    path: '/cart',
    element: <Cart />
  },
  // login
  {
    path: 'login',
    element: <Login />
  }
])

export default router

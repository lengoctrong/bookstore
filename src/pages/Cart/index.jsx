import { Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
// import BooksList from '../../components/BooksList'
import CartContainer from './CartContainer'
const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const { cartItems, hasItem } = cart

  return <CartContainer></CartContainer>
}

export default Cart

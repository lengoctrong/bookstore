import { useSelector } from 'react-redux'
// import BooksList from '../../components/BooksList'
import CartContainer from './CartContainer'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  return <CartContainer cartItems={cartItems}></CartContainer>
}

export default Cart

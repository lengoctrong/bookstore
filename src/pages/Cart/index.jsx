import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
const Cart = () => {
  const books = useSelector((state) => state.cart.cartItems)
  return <BooksList books={books}></BooksList>
}

export default Cart

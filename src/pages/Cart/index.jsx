import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
import Paginator from '../../components/Header/components/Paginator'
const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const { cartItems, hasItem } = cart

  return (
    <>
      <div className="cart-container">
        <BooksList books={cartItems}></BooksList>
        <div className="cart-footer">{hasItem && <Paginator />}</div>
      </div>
    </>
  )
}

export default Cart

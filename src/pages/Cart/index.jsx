import { Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const { cartItems, hasItem } = cart

  return (
    <>
      <div className="cart-container">
        <BooksList books={cartItems}></BooksList>
        <div className="cart-footer">{hasItem && <Pagination />}</div>
      </div>
    </>
  )
}

export default Cart

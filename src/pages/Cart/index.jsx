import { useSelector } from 'react-redux'
import CartContainer from './CartContainer'
const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems, totalQuantity } = cart
  return (
    <CartContainer
      cartItems={cartItems}
      totalQuantity={totalQuantity}
    ></CartContainer>
  )
}

export default Cart

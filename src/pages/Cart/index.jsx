import { useSelector } from 'react-redux'
import BookItem from '../../components/BookItem'
import BooksList from '../../components/BooksList'
const Cart = () => {
  const books = useSelector((state) => state.cart.cartItems)
  console.log(books)
  return (
    <BooksList>
      {books.map((book) => {
        return (
          <>
            <BookItem
              key={book.id}
              id={book.id}
              volumeInfo={book.volumeInfo}
              saleInfo={book.saleInfo}
            />
          </>
        )
      })}
    </BooksList>
  )
}

export default Cart

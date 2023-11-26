import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'

const Categories = () => {
  const category = useSelector((state) => state.book.booksByCategory)

  return (
    <>
      <div className="category">
        <BooksList books={category} />
      </div>
    </>
  )
}

export default Categories

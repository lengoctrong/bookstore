import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import BookItem from '../../components/BookItem'
import BooksList from '../../components/BooksList'
const Home = () => {
  const books = useSelector((state) => state.book.books)
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.bookstore.searchBarHeight} - ${theme.bookstore.navBarHeight})`
      }}
    >
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
    </Box>
  )
}

export default Home

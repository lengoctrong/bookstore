import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
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
      <BooksList books={books} />
    </Box>
  )
}

export default Home

import { Box, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
const Home = () => {
  const bookSelector = useSelector((state) => state.book)
  const { books, isFetching } = bookSelector

  const totalItems = useSelector((state) => state.book.totalItems)

  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.bookstore.searchBarHeight} - ${theme.bookstore.navBarHeight})`
      }}
    >
      <BooksList books={books} />
      {isFetching && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center', height: 100 }}>
            <Pagination count={10} page={1} variant="outlined" />
          </Box>
        </>
      )}
    </Box>
  )
}

export default Home

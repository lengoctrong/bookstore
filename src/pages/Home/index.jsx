import { Box, Pagination } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
import { getItems } from '../../redux/apiRequest'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const bookSelector = useSelector((state) => state.book)
  const { books, isFetching } = bookSelector

  const totalItems = useSelector((state) => state.book.totalItems)

  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.search.searchValue)

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage)
    getItems(dispatch, searchValue, currentPage, totalItems)
  }
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
            <Pagination
              size="large"
              onChange={handlePageChange}
              count={10}
              page={currentPage}
              variant="outlined"
            />
          </Box>
        </>
      )}
    </Box>
  )
}

export default Home

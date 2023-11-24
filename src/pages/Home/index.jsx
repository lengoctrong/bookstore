import { Box, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
import { getAllItems } from '../../redux/apiRequest'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const bookSelector = useSelector((state) => state.book)
  const { books, isFetching, totalItems } = bookSelector
  const totalPages = Math.ceil(totalItems / 6)
  const searchValue = useSelector((state) => state.search.searchValue)

  const dispatch = useDispatch()

  useEffect(() => {
    getAllItems(dispatch, searchValue, currentPage, totalItems)
  }, [dispatch, searchValue, currentPage, totalItems])

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage)
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
              count={totalPages}
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

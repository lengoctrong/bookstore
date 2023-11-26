import { Box, Button, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BooksList from '../../components/BooksList'
import { getAllItems, getByCategory } from '../../redux/apiRequest'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const bookSelector = useSelector((state) => state.book)
  const { books, isFetching, totalItems } = bookSelector
  const totalPages = Math.ceil(totalItems / 6)
  const searchValue = useSelector((state) => state.search.searchValue)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    getAllItems(dispatch, searchValue, currentPage, totalItems)
  }, [dispatch, searchValue, currentPage, totalItems])

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage)
  }

  const handleFilterByCate = (e) => {
    const category = e.target.value
    getByCategory(dispatch, searchValue, category)
    navigate(`/categories?category=${category}`)
  }

  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.bookstore.searchBarHeight} - ${theme.bookstore.navBarHeight})`
      }}
    >
      <Box sx={{ display: 'flex', my: 2, gap: 2 }}>
        <Button
          value="free-ebooks"
          variant="contained"
          onClick={handleFilterByCate}
        >
          Free ebooks
        </Button>
        <Button
          value="paid-ebooks"
          variant="contained"
          onClick={handleFilterByCate}
        >
          Paid ebooks
        </Button>
      </Box>
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

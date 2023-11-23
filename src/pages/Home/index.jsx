import { Box } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BooksList from '../../components/BooksList'
import Paginator from '../../components/Header/components/Paginator'
const Home = () => {
  const bookSelector = useSelector((state) => state.book)
  const { books, isFetching } = bookSelector
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.bookstore.searchBarHeight} - ${theme.bookstore.navBarHeight})`
      }}
    >
      <BooksList books={books} />
      {isFetching && <Paginator />}
    </Box>
  )
}

export default Home

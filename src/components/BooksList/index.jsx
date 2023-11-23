import { Box } from '@mui/material'
import BookItem from '../BookItem'
const BooksList = ({ books }) => {
  return (
    <div className="books-list">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 5,
          padding: 5
        }}
      >
        {books.map((book) => {
          return (
            <>
              <BookItem key={book.id} book={book} />
            </>
          )
        })}
      </Box>
    </div>
  )
}

export default BooksList

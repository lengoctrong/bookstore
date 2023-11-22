import { Box } from '@mui/material'

const BooksList = ({ children }) => {
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
        {children}
      </Box>
    </div>
  )
}

export default BooksList

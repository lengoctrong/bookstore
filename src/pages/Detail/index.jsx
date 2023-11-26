import StarRateIcon from '@mui/icons-material/StarRate'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Detail = () => {
  const bookDetail = useSelector((state) => state.book.bookDetail)

  const { volumeInfo, saleInfo } = bookDetail

  return (
    <div className="detail">
      <Box sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
                alt={bookDetail.title}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">
              Title: {volumeInfo && volumeInfo.title}
            </Typography>
            <Typography variant="h5">Authors:</Typography>
            {volumeInfo && volumeInfo.authors
              ? volumeInfo.authors.map((auth, idx) => <p key={idx}>{auth}</p>)
              : null}
            <Typography variant="h5">Description:</Typography>
            {volumeInfo && volumeInfo.description}volumeInfo.description
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Average rating:{' '}
              {volumeInfo && volumeInfo.averageRating ? (
                <Typography variant="h5">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span>{volumeInfo.averageRating}/5</span>
                    <StarRateIcon sx={{ color: 'orange' }} />
                  </Box>
                </Typography>
              ) : (
                'updating...'
              )}
            </Box>
            <Typography variant="h5">
              Preview:{' '}
              {volumeInfo && <Link to={volumeInfo.previewLink}>click</Link>}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Detail

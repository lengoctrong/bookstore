import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StarRateIcon from '@mui/icons-material/StarRate'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/apiRequest'
const Detail = () => {
  const dispatch = useDispatch()
  const bookDetail = useSelector((state) => state.book.bookDetail)

  const { volumeInfo, saleInfo, id } = bookDetail

  const handleAddClick = () => {
    addToCart(dispatch, id)
  }

  return (
    <div className="detail">
      <Box sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '250px'
              }}
            >
              <img
                src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
                alt={bookDetail.title}
                width="100%"
              />
              <Typography sx={{ my: 2 }} variant="h5">
                Price:{' '}
                {saleInfo && saleInfo.listPrice
                  ? saleInfo.listPrice.amount
                  : 'Free'}
              </Typography>
              <Button
                variant="contained"
                onClick={handleAddClick}
                aria-label="add"
              >
                <ShoppingCartIcon />
                <Typography>Add to cart</Typography>
              </Button>
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

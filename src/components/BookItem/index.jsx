import InfoIcon from '@mui/icons-material/Info'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { addToCard } from '../../redux/apiRequest'
function BookItem({ id, volumeInfo, saleInfo }) {
  const dispatch = useDispatch()
  const cartBooks = useSelector((state) => state.cart.books)
  const { title, subtitle, authors, description, publisher, publishedDate } =
    volumeInfo
  const amount = saleInfo.listPrice && saleInfo.listPrice.amount

  const currencyCode = saleInfo.listPrice && saleInfo.listPrice.currencyCode

  const handleAddClick = () => {
    addToCard(cartBooks, dispatch, id)
  }

  return (
    <Card sx={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
      <CardHeader title={title} subheader={subtitle} />
      <CardMedia
        component="img"
        src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
        alt={title}
        style={{ width: '200px', margin: 'auto' }}
      />
      <CardContent>
        <Typography>Date: {publishedDate}</Typography>
        <Typography>Published by: {publisher}</Typography>
        <Typography variant="body2" color="text.secondary">
          {amount && currencyCode ? (
            <p>
              Price: {amount} {currencyCode}
            </p>
          ) : (
            'Price: 250000 VND'
          )}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton onClick={handleAddClick} aria-label="add">
          <ShoppingCartIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton aria-label="more">
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BookItem

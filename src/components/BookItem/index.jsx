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

function BookItem({ book }) {
  const dispatch = useDispatch()

  const { volumeInfo, saleInfo } = book

  const { listPrice } = saleInfo

  const handleAddClick = () => {
    addToCard(dispatch, book.id)
  }

  return (
    <Card sx={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={volumeInfo && volumeInfo.title}
        subheader={volumeInfo && volumeInfo.subtitle}
      />
      <CardMedia
        component="img"
        src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
        alt={book.title}
        style={{ width: '200px', margin: 'auto' }}
      />
      <CardContent>
        <Typography>Date: {volumeInfo.publishedDate}</Typography>
        <Typography>Published by: {volumeInfo.publisher}</Typography>
        <Typography variant="body2" color="text.secondary">
          {listPrice &&
          saleInfo.listPrice.amount &&
          saleInfo.listPrice.currencyCode
            ? `Price: ${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`
            : 'Price: 250000 VND'}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton onClick={handleAddClick} aria-label="add">
          <ShoppingCartIcon />
          <Typography>Add to cart</Typography>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton aria-label="more">
          <InfoIcon />
          <Typography>Detail</Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BookItem

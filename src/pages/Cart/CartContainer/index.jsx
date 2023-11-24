import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import SearchBar from '../../../components/Header/components/SearchBar'
import { deleteCartItem } from '../../../redux/apiRequest'

const CartContainer = ({ cartItems, totalQuantity }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    deleteCartItem(dispatch, id)
  }

  return (
    <div className="cart-container">
      <SearchBar />
      <div className="cart-title">
        <Typography variant="h3" sx={{ textAlign: 'center', my: 5 }}>
          Your Cart ( {totalQuantity} items)
        </Typography>
      </div>
      <div className="cart-content">
        <Container>
          <TableContainer sx={{ maxHeight: 350 }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow
                    key={item.id}
                    id={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <p>{item.title}</p>
                      <img src={item.thumbnail} alt="{item.title}" />
                    </TableCell>
                    <TableCell align="center">
                      {item.amount ? item.amount : item.price}
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                          justifyContent: 'center'
                        }}
                      >
                        <Button>
                          <RemoveIcon />
                        </Button>
                        <Typography>{item.quantity}</Typography>
                        <Button>
                          <AddIcon />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{item.total}</TableCell>
                    <TableCell align="right">
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={() => {
                          handleDelete(item.id)
                        }}
                      >
                        <DeleteIcon />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </div>
  )
}

export default CartContainer

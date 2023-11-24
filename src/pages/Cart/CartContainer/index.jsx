import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import SearchBar from '../../../components/Header/components/SearchBar'

const createData = (item, price, quantity, total) => ({
  item,
  price,
  quantity,
  total
})

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32),
  createData('Frozen yoghurt', 159, 6.0, 24, 32)
]

const CartContainer = () => {
  return (
    <div className="cart-container">
      <SearchBar />
      <div className="cart-title">
        <Typography variant="h3" sx={{ textAlign: 'center', my: 5 }}>
          Your Cart (4 items)
        </Typography>
      </div>
      <div className="cart-content">
        <Container>
          <TableContainer sx={{ maxHeight: 350 }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity(g)</TableCell>
                  <TableCell align="right">Total(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.item}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
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

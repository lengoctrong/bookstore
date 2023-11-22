import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Badge,
  Box,
  Button,
  Container,
  TextField,
  Tooltip
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllBooks } from '../../../../redux/apiRequest'

const SearchBar = () => {
  const [bookName, setBookName] = useState()
  const dispatch = useDispatch()

  const handleClick = () => {
    getAllBooks(dispatch, bookName)
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: (theme) => theme.bookstore.searchBarHeight
        }}
      >
        <div className="logo">
          <Tooltip title="Logo">
            <NavLink to="/">L O G O</NavLink>
          </Tooltip>
        </div>
        <div className="search">
          <Box
            sx={{
              width: 500,
              height: 50,
              maxHeight: '100%',
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TextField
              value={bookName}
              onChange={(e) => {
                setBookName(e.target.value)
              }}
              fullWidth
              placeholder="What books do you want to search for?"
              id="fullWidth"
            ></TextField>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
                height: '115%',
                width: 55,
                fontSize: '3.6rem',
                color: 'white'
              }}
            >
              <SearchIcon style={{ cursor: 'pointer' }} onClick={handleClick} />
            </Box>
          </Box>
        </div>
        <div className="cart">
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              fontSize: '1.2rem',
              alignItems: 'center'
            }}
          >
            <Button>
              Cart
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </Button>
          </Box>
        </div>
      </Box>
    </Container>
  )
}

export default SearchBar

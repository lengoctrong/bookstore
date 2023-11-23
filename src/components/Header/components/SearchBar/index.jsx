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
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getItems } from '../../../../redux/apiRequest'
import { getSearchValue } from '../../../../redux/searchSlice'
import ModeToggle from '../ModeToggle'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const count = useSelector((state) => state.cart.totalQuantity)

  const handleSearchClick = () => {
    dispatch(getSearchValue(searchValue))
    getItems(dispatch, searchValue)
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
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
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
              <SearchIcon
                style={{ cursor: 'pointer' }}
                onClick={handleSearchClick}
              />
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
              <NavLink to="/cart">
                Cart
                <Badge badgeContent={count} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </NavLink>
            </Button>
            <ModeToggle />
          </Box>
        </div>
      </Box>
    </Container>
  )
}

export default SearchBar

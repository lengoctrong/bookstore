import { useTheme } from '@emotion/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
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
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAllItems } from '~/redux/apiRequest'
import { getSearchValue } from '~/redux/searchSlice'
import ModeToggle from '../ModeToggle'

const SearchBar = () => {
  const theme = useTheme()
  const textColor = theme.palette.text.primary

  const navigate = useNavigate()

  const userSelector = useSelector((state) => state.user)

  const { user } = userSelector

  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const count = useSelector((state) => state.cart.totalQuantity)

  const handleSearchClick = () => {
    dispatch(getSearchValue(searchValue))
    getAllItems(dispatch, searchValue)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
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
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <div className="account">
          {user ? (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Tooltip title="Account settings">
                  <Button
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography>Hi, {user.given_name}</Typography>
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </Box>
                  </Button>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <NavLink to="/profile">
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center',
                        color: 'black'
                      }}
                    >
                      <AccountCircleIcon />
                      <p>Profile</p>
                    </Box>
                  </NavLink>
                </MenuItem>

                <Divider />
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem('user')
                    location.reload()
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                      color: 'black'
                    }}
                  >
                    <Logout fontSize="small" />
                    Logout
                  </Box>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button>
              <Box sx={{ color: textColor }}>
                <NavLink to="/login">Log in</NavLink>
              </Box>
            </Button>
          )}
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
            <NavLink to="/cart">
              <Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Badge badgeContent={count} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                  <p>Cart</p>
                </Box>
              </Button>
            </NavLink>
            <ModeToggle />
          </Box>
        </div>
      </Box>
    </Container>
  )
}

export default SearchBar

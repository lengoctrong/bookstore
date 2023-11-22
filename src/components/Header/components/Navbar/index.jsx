import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: (theme) => theme.bookstore.navBarHeight,
        backgroundColor: '#232323',
        color: 'white'
      }}
    >
      <div></div>
      <nav className="navigation">
        <Box sx={{ display: 'flex', gap: 5 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact </NavLink>
        </Box>
      </nav>
      <div></div>
    </Box>
  )
}

export default Navbar

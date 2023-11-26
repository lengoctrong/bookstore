import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: (theme) => theme.bookstore.navBarHeight,
        backgroundColor: '#292d3e',
        color: 'white'
      }}
    >
      <nav className="navigation">
        <Box sx={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/contact">Contact </NavLink>
        </Box>
      </nav>
    </Box>
  )
}

export default Navbar

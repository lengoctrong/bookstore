import { Box } from '@mui/material'
import ModeToggle from './components/ModeToggle'
import Navbar from './components/Navbar'
const Header = () => {
  return (
    <header>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ModeToggle />
      </Box>
      <Navbar />
    </header>
  )
}

export default Header

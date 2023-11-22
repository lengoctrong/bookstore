import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import SearchAppBar from './components/SearchAppBar'

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <SearchAppBar />
      </Box>
      <Navbar />
    </header>
  )
}

export default Header

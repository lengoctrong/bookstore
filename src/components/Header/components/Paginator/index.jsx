import { Box, Pagination } from '@mui/material'

const Paginator = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: 100 }}>
      <Pagination count={10} variant="outlined" />
    </Box>
  )
}

export default Paginator

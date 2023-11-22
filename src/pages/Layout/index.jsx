import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
const Layout = () => {
  return (
    <Container style={{ height: '100vh' }}>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout

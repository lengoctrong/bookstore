import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
const Layout = () => {
  return (
    <Container disableGutters maxWidth={false} style={{ height: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout

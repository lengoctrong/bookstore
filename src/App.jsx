import { RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import router from './router/index'
function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  )
}

export default App

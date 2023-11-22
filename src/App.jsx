import { RouterProvider } from 'react-router-dom'
import './App.css'
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

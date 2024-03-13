import { RouterProvider } from 'react-router-dom'
import Layout from '~/pages/Layout'
import router from '~/router/index'
import './App.css'
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

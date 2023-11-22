import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider
} from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'
import store from './redux/store'
import theme from './theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </StoreProvider>
  </React.StrictMode>
)

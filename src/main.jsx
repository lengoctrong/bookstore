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

import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1034071323374-uh7a5crhr8kgpruqvn9cm3dpdbs4dkvq.apps.googleusercontent.com">
      <StoreProvider store={store}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <App />
        </CssVarsProvider>
      </StoreProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)

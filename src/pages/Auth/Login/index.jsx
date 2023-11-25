import GoogleIcon from '@mui/icons-material/Google'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../redux/apiRequest'
const defaultTheme = createTheme()

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      const accessToken = res.access_token
      try {
        loginUser(dispatch, navigate, accessToken)
        // const res = await axios.get(
        //   'https://www.googleapis.com/oauth2/v3/userinfo',
        //   {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`
        //     }
        //   }
        // )

        // localStorage.setItem('user', JSON.stringify(res.data))
        // navigate('/')
      } catch (err) {
        console.log(err)
      }
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    // const data = new FormData(event.currentTarget)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password')
    // })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
              <Typography variant="h6">OR</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => login()}
                style={{ display: 'flex', gap: 1, alignItems: 'center' }}
              >
                Login with Google <GoogleIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login

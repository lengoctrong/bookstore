import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userSelector = useSelector((state) => state.user)
  const { user } = userSelector

  return (
    <div className="profile">
      <Box sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={user.picture} alt="img" />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">Full Name: {user.given_name}</Typography>
            <Typography variant="h5">
              Family Name: {user.family_name}
            </Typography>
            <Typography variant="h5">Email: {user.email}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Profile

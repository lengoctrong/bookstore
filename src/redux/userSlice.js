import { createSlice } from '@reduxjs/toolkit'

const user =
  localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user'))
    : null

const initialState = {
  user: user
  // user: {
  //   email: user.email,
  //   email_verified: user.email_verified,
  //   family_name: user.family_name,
  //   given_name: user.given_name,
  //   hd: user.hd,
  //   locale: user.locale,
  //   name: user.name,
  //   picture: user.picture,
  //   sub: user.sub
  // }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const user =
  localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user'))
    : {}

const initialState = {
  user: user
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

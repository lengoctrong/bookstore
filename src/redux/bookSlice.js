import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: []
  },
  reducers: {
    getAll: (state, action) => {
      state.books = action.payload
    }
  }
})

export const { getAll } = bookSlice.actions

export default bookSlice.reducer

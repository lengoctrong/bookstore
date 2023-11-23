import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: []
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.books = action.payload
    }
  }
})

export const { getAll } = bookSlice.actions

export default bookSlice.reducer

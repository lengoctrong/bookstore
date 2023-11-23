import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  totalItems: 0,
  isFetching: false
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getAllBooks: (state, action) => {
      state.isFetching = true
      state.books = action.payload.items
      state.totalItems = action.payload.totalItems
    }
  }
})

export const { getAllBooks } = bookSlice.actions

export default bookSlice.reducer

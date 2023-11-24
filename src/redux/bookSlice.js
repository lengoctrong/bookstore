import { createSlice } from '@reduxjs/toolkit'

const totalItems =
  localStorage.getItem('totalItems') !== null
    ? JSON.parse(localStorage.getItem('totalItems'))
    : 0

const initialState = {
  books: [],
  totalItems: totalItems,
  isFetching: false
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getAllBooks: (state, action) => {
      state.isFetching = true
      state.books = action.payload.items
    },
    getTotalItems: (state, action) => {
      state.totalItems = action.payload.totalItems

      localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
    }
  }
})

export const { getAllBooks, getTotalItems } = bookSlice.actions

export default bookSlice.reducer

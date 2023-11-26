import { createSlice } from '@reduxjs/toolkit'

const totalItems =
  localStorage.getItem('totalItems') !== null
    ? JSON.parse(localStorage.getItem('totalItems'))
    : 0

const bookDetail =
  localStorage.getItem('bookDetail') !== null
    ? JSON.parse(localStorage.getItem('bookDetail'))
    : null

const initialState = {
  books: [],
  totalItems: totalItems,
  booksByCategory: [],
  bookDetail: bookDetail,
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
    },
    getFilterItems: (state, action) => {
      state.booksByCategory = action.payload
    },
    addDetailItem: (state, action) => {
      const id = action.payload
      state.bookDetail = state.books.find((book) => book.id == id)
      localStorage.setItem('bookDetail', JSON.stringify(state.bookDetail))
    }
  }
})

export const { getAllBooks, getTotalItems, getFilterItems, addDetailItem } =
  bookSlice.actions

export default bookSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    books: []
  },
  reducers: {
    saveBook: (state, action) => {
      state.books.push(action.payload)
    }
  }
})

export const { saveBook } = cartSlice.actions

export default cartSlice.reducer

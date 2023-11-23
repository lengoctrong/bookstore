import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'
const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
    search: searchReducer
  }
})

export default store

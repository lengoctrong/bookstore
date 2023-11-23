import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer
  }
})

export default store

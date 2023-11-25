import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'
import userReducer from './userSlice'
const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
    search: searchReducer,
    user: userReducer
  }
})

export default store

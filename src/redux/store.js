import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'
import cartReducer from './cartSlice'
import counterReducer from './counterSlice'
const store = configureStore({
  reducer: {
    book: bookReducer,
    counter: counterReducer,
    cart: cartReducer
  }
})

export default store

import { createSlice } from '@reduxjs/toolkit'

const cartItems =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const totalQuantity =
  localStorage.getItem('totalQuantity') !== null
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0

const totalAmount =
  localStorage.getItem('totalAmount') !== null
    ? JSON.parse(localStorage.getItem('totalAmount'))
    : 0

const initialState = {
  cartItems: cartItems,
  hasItem: false,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem
    addItem: (state, action) => {
      const newItem = action.payload

      state.cartItems.push({
        id: newItem.id,
        volumeInfo: newItem.volumeInfo,
        saleInfo: newItem.saleInfo,
        title: newItem.volumeInfo.title,
        subtitle: newItem.volumeInfo.subtitle,
        thumbnail: newItem.volumeInfo.imageLinks.thumbnail,
        amount: newItem.saleInfo.listPrice?.amount,
        currencyCode: newItem.saleInfo.listPrice?.currencyCode
      })
      state.hasItem = true
      state.totalQuantity++

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )

      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
    }
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer

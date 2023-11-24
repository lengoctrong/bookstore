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
    // add item
    addItem: (state, action) => {
      const newItem = action.payload

      const existingItem = state.cartItems.find((item) => item.id == newItem.id)

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.volumeInfo.title,
          subtitle: newItem.volumeInfo.subtitle,
          thumbnail: newItem.volumeInfo.imageLinks.thumbnail,
          amount: newItem.saleInfo.listPrice?.amount,
          price: 250000,
          quantity: 1,
          currencyCode: newItem.saleInfo.listPrice?.currencyCode,
          saleInfo: newItem.saleInfo,
          volumeInfo: newItem.volumeInfo
        })
        state.totalQuantity++
      } else {
        state.totalQuantity++
        existingItem.quantity++
      }

      state.hasItem = true

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )

      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
    },

    //remove item
    removeItem: (state, action) => {
      const id = action.payload

      const deletedItem = state.cartItems.find((item) => item.id == id)

      const deletedItemQuantity = deletedItem.quantity

      state.totalQuantity -= deletedItemQuantity

      state.cartItems = state.cartItems.filter((item) => item != deletedItem)

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )

      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer

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
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
  hasItem: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item
    addItem: (state, action) => {
      state.hasItem = true

      const newItem = action.payload

      const existingItem = state.cartItems.find((item) => item.id == newItem.id)

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.volumeInfo.title,
          subtitle: newItem.volumeInfo.subtitle,
          thumbnail: newItem.volumeInfo.imageLinks.thumbnail,
          amount: newItem.saleInfo.listPrice?.amount,
          price: 0,
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

      state.totalAmount = state.cartItems.reduce((total, item) => {
        const price = item.amount ? item.amount : item.price
        return (total += price * item.quantity)
      }, 0)

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },

    //remove item
    removeItem: (state, action) => {
      const id = action.payload

      const deletedItem = state.cartItems.find((item) => item.id == id)

      const price = deletedItem.amount ? deletedItem.amount : deletedItem.price

      state.totalAmount -= price * deletedItem.quantity

      const deletedItemQuantity = deletedItem.quantity

      state.totalQuantity -= deletedItemQuantity

      state.cartItems = state.cartItems.filter((item) => item != deletedItem)

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )

      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },

    //decrease item
    decreaseItem: (state, action) => {
      const id = action.payload
      const selectedItem = state.cartItems.find((item) => item.id == id)

      const price = selectedItem.amount
        ? selectedItem.amount
        : selectedItem.price

      if (selectedItem.quantity > 1) {
        state.totalAmount -= price
        selectedItem.quantity--
        state.totalQuantity--
      }

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },

    //increase item
    increaseItem: (state, action) => {
      const id = action.payload
      const selectedItem = state.cartItems.find((item) => item.id == id)

      const price = selectedItem.amount
        ? selectedItem.amount
        : selectedItem.price

      state.totalAmount += price

      selectedItem.quantity++
      state.totalQuantity++

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      )
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    }
  }
})

export const { addItem, removeItem, increaseItem, decreaseItem } =
  cartSlice.actions

export default cartSlice.reducer

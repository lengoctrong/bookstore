import axios from '../MyAxios'
import { getAllBooks } from './bookSlice'
import { addItem, decreaseItem, increaseItem, removeItem } from './cartSlice'

export const getItems = async (
  dispatch,
  searchValue,
  currentPage = 1,
  totalItems = 1
) => {
  const limit = 10
  const totalPages = Math.ceil(totalItems / limit)
  currentPage = Math.max(1, Math.min(currentPage, totalPages))
  let offset = (currentPage - 1) * limit

  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&startIndex=${offset}&maxResults=${limit}&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    dispatch(getAllBooks(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const getAllItems = async (dispatch, searchValue = '', currentPage) => {
  let offset = 0
  let limit = 6

  if (!searchValue) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      searchValue += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      )
    }
  }

  if (currentPage > 1) {
    offset = (currentPage - 1) * limit
  }
  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&startIndex=${offset}&maxResults=${limit}&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    dispatch(getAllBooks(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const addToCart = async (dispatch, id) => {
  try {
    const res = await axios.get(`/volumes/${id}`)
    dispatch(addItem(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteCartItem = (dispatch, id) => {
  dispatch(removeItem(id))
}

export const decreaseQuantity = (dispatch, id) => {
  dispatch(decreaseItem(id))
}
export const increaseQuantity = (dispatch, id) => {
  dispatch(increaseItem(id))
}

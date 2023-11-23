import axios from '../MyAxios'
import { getAllBooks } from './bookSlice'
import { addItem } from './cartSlice'

export const getItems = async (
  dispatch,
  searchValue,
  isPaginate = false,
  totalItems,
  maxResults = 10
) => {
  let startIndex = 0

  if (isPaginate) {
    let currentPage = 1
    const totalPages = Math.ceil(totalItems / maxResults)
    currentPage = Math.max(1, Math.min(currentPage, totalPages))
    startIndex = (currentPage - 1) * maxResults
  }

  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&${startIndex}&${maxResults}&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    dispatch(getAllBooks(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const addToCard = async (dispatch, id) => {
  try {
    const res = await axios.get(`/volumes/${id}`)
    dispatch(addItem(res.data))
  } catch (error) {
    console.log(error)
  }
}

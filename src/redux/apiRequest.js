import axios from '../MyAxios'
import { getAllBooks } from './bookSlice'
import { addItem } from './cartSlice'

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

export const addToCard = async (dispatch, id) => {
  try {
    const res = await axios.get(`/volumes/${id}`)
    dispatch(addItem(res.data))
  } catch (error) {
    console.log(error)
  }
}

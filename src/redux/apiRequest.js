import axios from '../MyAxios'
import { getAll } from './bookSlice'
import { addItem } from './cartSlice'

export const getAllBooks = async (dispatch, searchValue) => {
  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&startIndex=0&maxResults=10&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    dispatch(getAll(res.data.items))
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

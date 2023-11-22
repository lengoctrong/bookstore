import axios from '../MyAxios'
import { getAll } from './bookSlice'

export const getAllBooks = async (dispatch, searchValue) => {
  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    dispatch(getAll(res.data.items))
  } catch (error) {
    console.log(error)
  }
}

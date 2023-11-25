import axios from '../MyAxios'
import { getAllBooks, getTotalItems } from './bookSlice'
import { addItem, decreaseItem, increaseItem, removeItem } from './cartSlice'
import { getSearchValue } from './searchSlice'
import { addUser } from './userSlice'

export const getAllItems = async (
  dispatch,
  searchValue = '',
  currentPage,
  totalItems = 0
) => {
  let offset = 0
  let limit = 6

  if (!searchValue) {
    const list = ['html', 'css', 'javascript', 'reactjs']
    const listLength = list.length
    const key = Math.floor(Math.random() * listLength)

    searchValue = list[key]
    dispatch(getSearchValue(searchValue))
  }

  if (currentPage > 1) {
    offset = (currentPage - 1) * limit
  }
  try {
    const res = await axios.get(
      `/volumes?q=${searchValue}&startIndex=${offset}&maxResults=${limit}&key=AIzaSyAJFZtPiNSb8u_Z-2Wfe-pwmAHa5_hrPAQ`
    )

    if (totalItems == 0) {
      dispatch(getTotalItems(res.data))
    }

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

export const loginUser = async (dispatch, navigate, accessToken) => {
  try {
    const res = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    dispatch(addUser(res.data))
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}

export const logoutUser = (navigate) => {
  localStorage.removeItem('user')
  navigate('/login')
}

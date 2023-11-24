import { createSlice } from '@reduxjs/toolkit'

const searchValue =
  localStorage.getItem('searchValue') !== null
    ? JSON.parse(localStorage.getItem('searchValue'))
    : ''

const initialState = {
  searchValue: searchValue
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.searchValue = action.payload

      localStorage.setItem('searchValue', JSON.stringify(state.searchValue))
    }
  }
})

export const { getSearchValue } = searchSlice.actions

export default searchSlice.reducer

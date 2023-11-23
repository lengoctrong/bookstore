import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.searchValue = action.payload
    }
  }
})

export const { getSearchValue } = searchSlice.actions

export default searchSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

interface SearchProps {
  isSearchOpen: boolean
}

const initialState: SearchProps = {
  isSearchOpen: false
}


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.isSearchOpen = true
    },
    closeSearch: (state) => {
      state.isSearchOpen = false
    }
  }
})

export const { openSearch, closeSearch } = searchSlice.actions


export default searchSlice.reducer
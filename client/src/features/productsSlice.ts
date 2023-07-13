import { createSlice } from '@reduxjs/toolkit'

interface ProductsProps {
  title: string
  // wishlist: any[]
}

// all i need is the product's title so i can use it in BreadCrumps.tsx
const initialState: ProductsProps = {
  title: '',
  // wishlist: []
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductTitle: (state, action) => {
      state.title = action.payload
      // },
      // setWishlist: (state, action) => {
      //   const product = state.wishlist.find((product) => product._id === action.payload._id)
      //   if (product) return
      //   state.wishlist.push(action.payload)
      //   localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      // },
      // getWishlist: (state) => {
      //   const wishlist: any = JSON.parse(localStorage.getItem('wishlist'))
      //   state.wishlist = wishlist
    }
  }
})

export const { setProductTitle } = productsSlice.actions

export default productsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

type Product = {
  _id: string
  title: string
  description: string
  images: string[]
  price: number
  oldPirce: string
}

interface WishlistProps {
  products: any[]
}

const initialState: WishlistProps = {
  products: []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    getWishlist: (state) => {
      const products = JSON.parse(localStorage.getItem('wishlist'))
      if (products === null) {
        state.products = []
      } else {
        state.products = products
      }
    },
    setWishlist: (state) => {
      localStorage.setItem('wishlist', JSON.stringify(state.products))
    },
    addToWishlist: (state, action) => {
      console.log(action.payload)
      state.products = [...state.products, action.payload]
      // console.log(products)
      // state.products = state.products.push({ ...action.payload })
    },
    removeFromWishlist: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload)
    }
  }
})

export const { getWishlist, setWishlist, removeFromWishlist, addToWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
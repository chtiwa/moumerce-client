import { createSlice } from "@reduxjs/toolkit";

type Product = {
  _id: string | null
  title: string | null
  description: string | null
  img1: string | null
  img2: string | null
  price: string | null
  oldPirce: string | null
  quantity: number | 0
}

interface Cart {
  products: Product[]
  isCartOpen: boolean
}

const initialState: Cart = {
  isCartOpen: false,
  products: []
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true
    },
    closeCart: (state) => {
      state.isCartOpen = false
    },
    addItem: (state, action) => {
      const product: any = state.products.find(prodcut => prodcut._id === action.payload._id)
      if (product) {
        product.quantity += 1
      } else {
        state.products.push(product)
      }
    },
    removeItem: (state, action) => {
      const product: any = state.products.find(product => product._id === action.payload._ids)
      if (product?.quantity <= 1) {
        state.products.filter((product) => product._id !== action.payload._id)
      } else {
        product.quantity -= 1
      }
    },
    clearCart: (state) => {
      state.products = []
    }
  }
})

export const { openCart, closeCart, addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

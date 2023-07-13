// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

type Product = {
  _id: string
  title: string
  description: string
  images: string[]
  price: number
  oldPirce: string
  quantity: number
}

interface Cart {
  products: Product[]
  isCartOpen: boolean
  total: any
  itemsLength: number
}

const initialState: Cart = {
  isCartOpen: false,
  products: [],
  total: 0,
  itemsLength: 0
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
    getCart: (state) => {
      const products = JSON.parse(localStorage.getItem('products'))
      if (products === null) {
        state.products = []
      } else {
        state.products = products
      }
    },
    setCart: (state) => {
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    increaseQuantity: (state, action) => {
      const product: any = state?.products?.find(product => product._id === action.payload.product._id)
      if (product) {
        product.quantity += 1
      } else {
        // in case the the action is dispatched from the products page (action?oayload.quantity) else add one product
        state.products.push({ ...action.payload.product, quantity: action.payload.quantity ? action.payload.quantity : 1 })
      }
    },
    decreaseQuantity: (state, action) => {
      const product: any = state.products.find(product => product._id === action.payload._id)
      if (product.quantity === 1) {
        state.products = state.products.filter((product) => product._id !== action.payload._id)
      } else {
        product.quantity -= 1
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload._id)
    },
    clearCart: (state) => {
      state.products = []
    },
    calculateTotal: (state) => {
      // acc = accumelator
      // cur = currentValue
      state.total = state?.products?.length > 0 && state.products.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity
      }, 0)
      state.itemsLength = state.products.reduce((acc, cur) => {
        return acc + cur.quantity
      }, 0)
    }
  }
})

export const { openCart, closeCart, increaseQuantity, decreaseQuantity, removeItem, clearCart, setCart, getCart, calculateTotal } = cartSlice.actions

export default cartSlice.reducer

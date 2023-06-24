import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import sidebarReducer from "./sidebarSlice"
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sidebar: sidebarReducer,
    search: searchReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
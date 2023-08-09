import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import sidebarReducer from "./sidebarSlice"
import searchReducer from './searchSlice'
import productsReducer from './productsSlice'
import popupReducer from './popupSlice'
import wishlistReducer from './wishlistSlice'
import authReducer from './authSlice'
// import logger from 'redux-logger'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { productsApi } from '../services/products'
import { authApi } from '../services/auth'
import { cartsApi } from '../services/carts'
import { ordersApi } from '../services/orders'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer,
    popup: popupReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware, cartsApi.middleware, ordersApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
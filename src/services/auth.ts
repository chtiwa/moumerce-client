// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../features/authSlice'
// https://www.youtube.com/watch?v=-JJFQ9bkUbo&ab_channel=DaveGray

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token
  //   if (token) {
  //     headers.set('authorization', `Bearer ${token}`)
  //   }
  //   return headers
  // }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 403) {
    // send a refresh token to get a new access token
    const refreshResult = await baseQuery('/auth/check-login', api, extraOptions)
    // console.log(refreshResult)
    if (refreshResult?.data) {
      const firstName = api.getState().auth.firstname
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, firstName }))
      // try the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      // check if the refresh token is still available or logout
      api.dispatch(logout())
    }
  }
  return result
}

// createOrder
// createCart
// getOrders
// populate Order
// ...
// should be in here
export const authApi = createApi({
  // whent the access_token is expired send a request to check-login to check wether the refresh_token is expired or not
  // if it's not then malke the request 
  // else logout the user
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, any>({
      query: ({ user, cartId }) => ({
        url: '/orders',
        method: 'POST',
        body: { cart: cartId, user: user }
      })
    }),
    getOrders: builder.query<any, void>({
      query: () => '/orders'
    }),
    createCart: builder.mutation<any, any>({
      query: ({ products, total, user }) => ({
        url: '/carts',
        method: 'POST',
        body: { items: products, total, user }
      })
    })
  })
})

export const { useCreateOrderMutation, useCreateCartMutation, useGetOrdersQuery } = authApi
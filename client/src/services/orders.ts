import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/orders`
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, any>({
      query: ({ cartId }) => ({
        url: '/',
        method: 'POST',
        body: { cart: cartId }
      })
    })
  })
})

// should be in authSliceAPi
export const { useCreateOrderMutation } = ordersApi
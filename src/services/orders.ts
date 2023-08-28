import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/orders`
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, any>({
      query: ({ cartId, userId }) => ({
        url: "/",
        method: "POST",
        body: { cart: cartId, user: userId }
      })
    }),
    getOrders: builder.query<any, any>({
      query: () => `/`
    }),
    getOrder: builder.query<any, any>({
      query: (id) => `/populate/${id}`
    })
  })
})

// should be in authSliceAPi
export const { useCreateOrderMutation, useGetOrdersQuery, useGetOrderQuery } =
  ordersApi

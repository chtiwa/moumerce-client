import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const cartsApi = createApi({
  reducerPath: "cartsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_URL}/carts` }),
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: ({ products, total, user }) => ({
        url: '/',
        method: 'POST',
        body: { items: products, total, user }
      })
    })
  })
})

export const { useCreateCartMutation } = cartsApi
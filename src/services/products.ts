import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { TProduct } from './types/Product'

// interface ListResponse {
//   currentPage: number
//   totalPages: number
//   products: TProduct[]
// }

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/products`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, number | void>({
      query: (page = 1) => `?page=${page}`,
    }),
    getFeaturedProducts: builder.query<any, void>({
      query: () => `/featured`,
    }),
    getProduct: builder.query<any, string | undefined>({
      query: (id) => `/${id}`,
    }),
    getProductsByFilters: builder.query({
      query: (filters) =>
        `/filtered?sortBy=${filters.sortBy}&category=${filters.category}&size=${filters.size}&price=${filters.price}`,
    }),
    searchProducts: builder.query<any, string>({
      query: (title) => `/search?title=${title}`,
    }),
    addProductToWishlist: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `/wishlist`,
        method: "POST",
        body: id,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetFeaturedProductsQuery,
  useSearchProductsQuery,
  useGetProductsByFiltersQuery,
} = productsApi;

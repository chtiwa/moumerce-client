import { authApi } from "../services/auth"

export const authApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
        body: {}
      })
    }),
    checkLogin: builder.mutation({
      query: () => ({
        url: '/check-login',
        method: 'POST',
        body: {}
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useCheckLoginMutation
} = authApiSlice
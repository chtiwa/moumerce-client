// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../features/authSlice'
// https://www.youtube.com/watch?v=-JJFQ9bkUbo&ab_channel=DaveGray

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_URL}/auth`,
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
    const refreshResult = await baseQuery('/check-login', api, extraOptions)
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

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
  })
})
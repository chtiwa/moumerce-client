import { createSlice } from '@reduxjs/toolkit'


interface AuthProps {
  firstName: string
  isLoggedIn: boolean
  token: string
}

const initialState: AuthProps = {
  firstName: '',
  isLoggedIn: false,
  token: ''
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { isLoggedIn, firstName, accessToken } = action.payload
      state.firstName = firstName
      state.isLoggedIn = isLoggedIn
      state.token = accessToken
    },
    logout: (state) => {
      state.firstName = ''
      state.isLoggedIn = false
      state.token = ''
    }
  }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
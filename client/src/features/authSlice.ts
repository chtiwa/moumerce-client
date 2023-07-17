import { createSlice } from '@reduxjs/toolkit'


interface AuthProps {
  firstName: string
  isLoggedIn: boolean
  token: string
  userId: string
  role: string
}

const initialState: AuthProps = {
  firstName: '',
  isLoggedIn: false,
  token: '',
  userId: '',
  role: 'user'
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { isLoggedIn, firstName, accessToken, userId, role } = action.payload
      console.log(userId)
      state.firstName = firstName
      state.userId = userId
      state.role = role
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
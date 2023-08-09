import { createSlice } from '@reduxjs/toolkit'

interface PopuProps {
  isPopupOpen: boolean
  message: string
  success: boolean
}

const initialState: PopuProps = {
  isPopupOpen: false,
  message: '',
  success: false
}

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isPopupOpen = true
      state.message = action.payload.message
      state.success = action.payload.success
    },
    closePopup: (state) => {
      state.isPopupOpen = false
      state.message = ''
      state.success = false
    }
  }
})

export const { closePopup, openPopup } = popupSlice.actions
export default popupSlice.reducer
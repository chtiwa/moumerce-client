import { createSlice } from "@reduxjs/toolkit";

interface Sidebar {
  isSidebarOpen: boolean
}

const initialState: Sidebar = {
  isSidebarOpen: false
}


const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state: Sidebar) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state: Sidebar) => {
      state.isSidebarOpen = false
    },
  }
})


export const { openSidebar, closeSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  darkMode: boolean
  authState: boolean
  profileMenuOpen: boolean
  sideMenuOpen: boolean
}

const initialState: AppState = {
  darkMode: true,
  authState: false,
  profileMenuOpen: false,
  sideMenuOpen: false,
}

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => { state.authState = action.payload },
    setDarkMode: (state, action: PayloadAction<boolean>) => { state.darkMode = action.payload },
    toggleSideMenu: (state) => { state.sideMenuOpen = !state.sideMenuOpen },
    toggleProfileMenu: (state) => { state.profileMenuOpen = !state.profileMenuOpen },
  }
})

export const {
  setAuthState,
  setDarkMode,
  toggleProfileMenu,
  toggleSideMenu
} = appSlice.actions

export default appSlice.reducer
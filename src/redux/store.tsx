import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    create: () => null,
    edit: () => null,
    play: () => null,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
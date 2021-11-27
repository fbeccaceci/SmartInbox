import { configureStore } from "@reduxjs/toolkit";

import authSlice from './slices/authSlice'
import inboxSlice from './slices/inboxSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inbox: inboxSlice.reducer
  }
})

export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice } from "@reduxjs/toolkit";
import { authorizeUser } from '../thunks'

interface State {
  authToken?: string;
  authTokenExpirationDate?: string;
  refreshToken?: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {} as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authorizeUser.fulfilled, (state, action) => {
      const {payload} = action

      state.authToken = payload.accessToken
      state.authTokenExpirationDate = payload.accessTokenExpirationDate
      state.refreshToken = payload.refreshToken
    })
  } 
})

export default authSlice
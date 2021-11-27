import { createSlice } from "@reduxjs/toolkit";

import { authorizeUser } from '../thunks'
import { ApiObjectStatus } from "@models";

interface State {
  authToken?: string;
  authTokenExpirationDate?: string;
  refreshToken?: string;
  authStatus: ApiObjectStatus
}

const initialState: State = {
  authStatus: ApiObjectStatus.IDLE
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authorizeUser.fulfilled, (state, action) => {
      const {payload} = action

      state.authStatus = ApiObjectStatus.SUCCEEDED
      state.authToken = payload.accessToken
      state.authTokenExpirationDate = payload.accessTokenExpirationDate
      state.refreshToken = payload.refreshToken
    })
    builder.addCase(authorizeUser.pending, (state) => {
      state.authStatus = ApiObjectStatus.PENDING
    })
    builder.addCase(authorizeUser.rejected, (state) => {
      state.authStatus = ApiObjectStatus.FAILED
    })
  } 
})

export default authSlice
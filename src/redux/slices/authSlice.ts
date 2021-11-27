import { createSlice } from "@reduxjs/toolkit";

import { authorizeUser, authorizeSavedUser, logOutUser } from '../thunks'
import { ApiObjectStatus } from "@models";

interface State {
  authToken?: string;
  authTokenExpirationDate?: string;
  refreshToken?: string;
  emailAddress?: string;
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
      state.emailAddress = payload.emailAddress
    })
    builder.addCase(authorizeUser.pending, (state) => {
      state.authStatus = ApiObjectStatus.PENDING
    })
    builder.addCase(authorizeUser.rejected, (state) => {
      state.authStatus = ApiObjectStatus.FAILED
    })

    builder.addCase(authorizeSavedUser.fulfilled, (state, action) => {
      const {payload} = action

      state.authStatus = ApiObjectStatus.SUCCEEDED
      state.authToken = payload.accessToken
      state.authTokenExpirationDate = payload.accessTokenExpirationDate
      state.refreshToken = payload.refreshToken
      state.emailAddress = payload.emailAddress
    })
    builder.addCase(authorizeSavedUser.pending, (state) => {
      state.authStatus = ApiObjectStatus.PENDING
    })
    builder.addCase(authorizeSavedUser.rejected, (state) => {
      state.authStatus = ApiObjectStatus.FAILED
    })

    builder.addCase(logOutUser.fulfilled, state => {
      state.authStatus = ApiObjectStatus.FAILED //We put failed so AuthenticationFlowNavigator understand is a logout rather than a fresh install
      state.authToken = undefined
      state.authTokenExpirationDate = undefined
      state.refreshToken = undefined
      state.emailAddress = undefined
    })
  } 
})

export default authSlice
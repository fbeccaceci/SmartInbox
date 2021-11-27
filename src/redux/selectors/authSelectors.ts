import { RootState } from "@redux/store";
import { createSelector } from "reselect";

const selectSelf = (state: RootState) => state.auth

export const selectAuthToken = createSelector(
  selectSelf,
  state => state.authToken
)

export const selectAuthTokenExpirationDate = createSelector(
  selectSelf,
  state => {
    if(state.authTokenExpirationDate) {
      return new Date(state.authTokenExpirationDate)
    }

    return
  }
)

export const selectRefreshToken = createSelector(
  selectSelf,
  state => state.refreshToken
)

export const selectAuthStatus = createSelector(
  selectSelf,
  state => state.authStatus
)

export const selectEmailAddress = createSelector(
  selectSelf,
  state => state.emailAddress
)

export const selectIsAuthenticated = createSelector(
  selectSelf,
  state => (
    state.authToken !== undefined
    && state.authTokenExpirationDate !== undefined
    && state.refreshToken !== undefined
  )
)
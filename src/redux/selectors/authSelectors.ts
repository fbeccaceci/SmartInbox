import { RooState } from "@redux/store";
import { createSelector } from "reselect";

const selectSelf = (state: RooState) => state.auth

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
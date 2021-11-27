import AsyncStorage from '@react-native-async-storage/async-storage'

import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticationService } from "@services";
import { AuthorizationResponse } from "@services/authenticationService";
import { AsyncStorageKeys } from '@utils';
import { AuthorizationError } from "src/errors";

type PARAMETER = undefined
type RESULT = AuthorizationResponse
type THUNK_CONFIG = {
  rejectValue: string
}

export default createAsyncThunk<RESULT, PARAMETER, THUNK_CONFIG>(
  'auth/AuthorizeSavedUser',
  async (_, thunkApi) => {
    console.log("Authorizing saved user");

    const {rejectWithValue} = thunkApi

    const savedAuthToken = await AsyncStorage.getItem(AsyncStorageKeys.userAccessToken)
    const savedAuthTokenExpireDate = await AsyncStorage.getItem(AsyncStorageKeys.userAccessTokenExpireDate)
    const savedRefreshToken = await AsyncStorage.getItem(AsyncStorageKeys.userRefreshToken)
    if(savedAuthToken && savedAuthTokenExpireDate && savedRefreshToken) {
      const expireDate = new Date(savedAuthTokenExpireDate)
      if(expireDate > new Date()) {
        console.log("Authorized user with saved token");
        return {
          accessToken: savedAuthToken,
          accessTokenExpirationDate: savedAuthTokenExpireDate,
          refreshToken: savedRefreshToken
        }
      }

      console.log("Saved token expired, refreshing token");
      try {
        let result = await AuthenticationService.refresh(savedRefreshToken)
        console.log("Authorized user with saved token");
        return result
      } catch(err) {
        const error = err as AuthorizationError
        console.warn(`Unable to refresh token with error: ${error}`);
      }
    }

    console.log("Authentication with saved user failed due to: No saved user found");
    return rejectWithValue("No saved user")

  }
)
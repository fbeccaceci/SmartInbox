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
  'auth/AuthorizeUser',
  async (_, thunkApi) => {
    console.log("Authorizing user with google");

    const savedAuthToken = await AsyncStorage.getItem(AsyncStorageKeys.userAccessToken)
    const savedAuthTokenExpireDate = await AsyncStorage.getItem(AsyncStorageKeys.userAccessTokenExpireDate)
    const savedRefreshToken = await AsyncStorage.getItem(AsyncStorageKeys.userRefreshToken)
    const savedUserEmail = await AsyncStorage.getItem(AsyncStorageKeys.userEmailAddress)
    if(savedAuthToken && savedAuthTokenExpireDate && savedRefreshToken && savedUserEmail) {
      const expireDate = new Date(savedAuthTokenExpireDate)
      if(expireDate > new Date()) {
        console.log("Authorized user with saved token");
        return {
          accessToken: savedAuthToken,
          accessTokenExpirationDate: savedAuthTokenExpireDate,
          refreshToken: savedRefreshToken,
          emailAddress: savedUserEmail
        }
      }

      console.log("Saved token expired, refreshing token");
      try {
        let result = await AuthenticationService.refresh(savedRefreshToken)
        console.log("Authorized user with saved token");

        AsyncStorage.setItem(AsyncStorageKeys.userAccessToken, result.accessToken)
        return result
      } catch(err) {
        const error = err as AuthorizationError
        console.warn(`Unable to refresh token with error: ${error}`);
      }
    }

    const {rejectWithValue} = thunkApi
    
    try {
      const authResult = await AuthenticationService.authorize()
      console.log("Successfully authorized user");

      AsyncStorage.setItem(AsyncStorageKeys.userAccessToken, authResult.accessToken)
      AsyncStorage.setItem(AsyncStorageKeys.userAccessTokenExpireDate, authResult.accessTokenExpirationDate)
      AsyncStorage.setItem(AsyncStorageKeys.userRefreshToken, authResult.refreshToken)
      AsyncStorage.setItem(AsyncStorageKeys.userEmailAddress, authResult.emailAddress)
      
      return authResult
    } catch(err) {
      const error = err as AuthorizationError
      console.warn(`Unable to authorize user with error: ${error}`);

      return rejectWithValue(error.message)
    }
  }
)
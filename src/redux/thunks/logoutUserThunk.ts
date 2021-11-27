import AsyncStorage from '@react-native-async-storage/async-storage'

import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncStorageKeys } from '@utils';

type PARAMETER = undefined
type RESULT = void
type THUNK_CONFIG = {
  rejectValue: string
}

export default createAsyncThunk<RESULT, PARAMETER, THUNK_CONFIG>(
  'auth/LogOut',
  async (_, thunkApi) => {
    AsyncStorage.multiRemove([
      AsyncStorageKeys.userAccessToken,
      AsyncStorageKeys.userAccessTokenExpireDate,
      AsyncStorageKeys.userEmailAddress,
      AsyncStorageKeys.userRefreshToken,
    ])
  }
)
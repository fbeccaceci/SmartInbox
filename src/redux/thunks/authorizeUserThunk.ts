import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticationService } from "@services";
import { AuthorizationResponse } from "@services/authenticationService";
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

    const {rejectWithValue} = thunkApi
    
    try {
      const authResult = await AuthenticationService.authorize()
      console.log("Successfully authorized user");
      
      return authResult
    } catch(err) {
      const error = err as AuthorizationError
      console.warn(`Unable to authorize user with error: ${error}`);

      return rejectWithValue(error.message)
    }
  }
)
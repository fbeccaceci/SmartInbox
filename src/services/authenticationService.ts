import * as AppAuth from 'react-native-app-auth';

import { AuthorizationError } from '../errors';
import { GooglePeopleApis } from '@apis';
import { Platform } from 'react-native';

const IOS_CLIENT_ID = "1085482124002-i94frqk8q0ugl1mk1kj99c9kv8qpttnu.apps.googleusercontent.com"
const ANDROID_CLIENT_ID = "1085482124002-8a8h7kk4b32rojvauamncfoejsnvbpjg.apps.googleusercontent.com"

const IOS_REDIRECT_URI = "com.ipla.smartInbox:com.googleusercontent.apps.1085482124002-i94frqk8q0ugl1mk1kj99c9kv8qpttnu"
const ANDROID_REDIRECT_URI = "com.smartinbox:/oauthredirect"

const config = {
  issuer: 'https://accounts.google.com',
  clientId: Platform.select({ios: IOS_CLIENT_ID, android: ANDROID_CLIENT_ID})!,
  redirectUrl: Platform.select({ios: IOS_REDIRECT_URI, android: ANDROID_REDIRECT_URI})!,
  scopes: ['https://mail.google.com/', "profile", "email"]
};

export interface AuthorizationResponse {
  accessToken: string;
  accessTokenExpirationDate: string;
  refreshToken: string;
  emailAddress: string;
}

export const authorize = async (): Promise<AuthorizationResponse> => {
  try {
    let result = await AppAuth.authorize(config);
    const emailAddress = await GooglePeopleApis.fetchMyEmailAddress(result.accessToken)

    return {
      accessToken: result.accessToken,
      accessTokenExpirationDate: result.accessTokenExpirationDate,
      refreshToken: result.refreshToken,
      emailAddress
    }
  } catch(err) {
    const error = err as Error
    throw new AuthorizationError(error.message);
  }
}

export const refresh = async (refreshToken: string): Promise<AuthorizationResponse> => {
  try {
    let result = await AppAuth.refresh(config, {
      refreshToken
    });
    const emailAddress = await GooglePeopleApis.fetchMyEmailAddress(result.accessToken)

    return {
      accessToken: result.accessToken,
      accessTokenExpirationDate: result.accessTokenExpirationDate,
      refreshToken: result.refreshToken || refreshToken,
      emailAddress
    }
  } catch(err) {
    const error = err as Error
    throw new AuthorizationError(error.message);
  }
}

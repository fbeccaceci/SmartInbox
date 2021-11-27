import * as AppAuth from 'react-native-app-auth';

import { AuthorizationError } from '../errors';
import { GooglePeopleApis } from '@apis';

const config = {
  issuer: 'https://accounts.google.com',
  clientId: '1085482124002-i94frqk8q0ugl1mk1kj99c9kv8qpttnu.apps.googleusercontent.com',
  redirectUrl: "com.ipla.smartInbox:com.googleusercontent.apps.1085482124002-i94frqk8q0ugl1mk1kj99c9kv8qpttnu",
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

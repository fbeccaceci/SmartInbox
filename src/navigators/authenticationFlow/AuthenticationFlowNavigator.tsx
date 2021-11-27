import React, { useEffect } from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { LoginScreen, SplashScreen } from '@screens';
import InboxStack from '../inboxStack/InboxStack';
import { AuthSelectors } from '@redux/selectors';
import { ApiObjectStatus } from '@models';
import { useAppDispatch } from '@redux/hooks';
import { authorizeSavedUser } from '@redux/thunks';

const Stack = createNativeStackNavigator()

const config: NativeStackNavigationOptions = {
  headerShown: false
}

const AuthenticationFlowNavigator: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    AsyncStorage.clear()
    dispatch(authorizeSavedUser())
  }, [])

  const authenticationStatus = useSelector(AuthSelectors.selectAuthStatus)
  const isLoggedIn = useSelector(AuthSelectors.selectIsAuthenticated)

  if(authenticationStatus === ApiObjectStatus.IDLE) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator screenOptions={config} >
      {
        isLoggedIn ? (
          <Stack.Screen name="app" component={InboxStack} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )
      }
    </Stack.Navigator>
  );
};

export default AuthenticationFlowNavigator;
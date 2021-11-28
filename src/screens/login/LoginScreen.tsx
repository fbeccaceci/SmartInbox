import React, { useCallback } from 'react';
import {View, Text, Pressable, StatusBar, Platform} from 'react-native';
import Image from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './loginScreenStyles'

import BackgroundImage from '@assets/images/loginScreen/login-image.jpg'
import GoogleIcon from '@assets/images/loginScreen/google-icon.svg'
import { useAppDispatch } from '@redux/hooks';
import { authorizeUser } from '@redux/thunks';
import { Palette } from '@styles';

const LoginScreen: React.FC = () => {
  const insets = useSafeAreaInsets()
  const dispatch = useAppDispatch()

  const login = useCallback(() => {
    dispatch(authorizeUser())
  }, [])

  return (
    <>
      {Platform.select({
        ios: <StatusBar hidden />,
        android: <StatusBar translucent backgroundColor={Palette.statusBar} />
      })}
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={BackgroundImage} />
        <View style={[styles.loginContainer, {paddingBottom: insets.bottom}]} >
          <Text style={styles.title} >{"Login into\nyour google account"}</Text>
          <Pressable style={styles.loginButton} onPress={login} >
            <GoogleIcon style={styles.googleIcon} />
            <Text style={styles.buttonLabel} >Login with google</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
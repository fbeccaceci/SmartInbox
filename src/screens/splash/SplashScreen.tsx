import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-fast-image'

import styles from './splashScreenStyles'

import SplashImage from '@assets/images/splashScreen/splash-image.jpg'

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.splashImage} source={SplashImage} />
    </View>
  );
};


export default SplashScreen;
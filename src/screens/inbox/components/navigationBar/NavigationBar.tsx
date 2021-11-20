import React from 'react';
import {View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from 'react-native-fast-image'

import styles from './navigationBarStyle'
import searchIcon from 'assets/images/navigationBar/search-icon.png'
import sendIcon from  'assets/images/navigationBar/send-icon.png'

const NavigationBar: React.FC = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Image source={searchIcon} style={styles.icon} />
      <Image source={sendIcon} style={styles.icon} />
    </View>
  );
};

export default NavigationBar;
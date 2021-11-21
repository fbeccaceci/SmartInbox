import React from 'react';
import {View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './navigationBarStyle'
import SearchIcon from "@assets/images/navigationBar/search-icon.svg"
import SendIcon from "@assets/images/navigationBar/send-icon.svg"

const NavigationBar: React.FC = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <SearchIcon style={styles.icon} />
      <SendIcon style={styles.icon} />
    </View>
  );
};

export default NavigationBar;
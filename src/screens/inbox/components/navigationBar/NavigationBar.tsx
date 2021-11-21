import React from 'react';
import {View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './navigationBarStyle'
import SearchIcon from "@assets/images/navigationBar/search-icon.svg"
import SendIcon from "@assets/images/navigationBar/send-icon.svg"
import { IconButton } from '@components';


const NavigationBar: React.FC = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <IconButton style={styles.icon} IconComponent={SearchIcon} />
      <IconButton style={styles.icon} IconComponent={SendIcon} />
    </View>
  );
};

export default NavigationBar;
import { IconButton } from '@components';
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '@assets/images/navigationBar/back-icon.svg'

import styles from './navigationBarStyle'

interface Props {
  title: string;
  goBack(): void
}

const NavigationBar: React.FC<Props> = ({title, goBack}) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <IconButton style={styles.icon} IconComponent={BackIcon} onPress={goBack} />
      <Text style={styles.title} numberOfLines={1} >{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

export default NavigationBar;
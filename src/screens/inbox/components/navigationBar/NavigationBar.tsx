import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'

import styles from './navigationBarStyle'
import SearchIcon from "@assets/images/navigationBar/search-icon.svg"
import SendIcon from "@assets/images/navigationBar/send-icon.svg"
import SettingsIcon from '@assets/images/navigationBar/settings-icon.svg'
import { IconButton } from '@components';
import { Palette } from '@styles';

const MAX_SCROLL = 200

interface Props {
  scroll: Animated.SharedValue<number>;
  loading: boolean,
  openSettings(): void
}

const NavigationBar: React.FC<Props> = ({scroll, loading, openSettings}) => {
  const insets = useSafeAreaInsets()

  const progress  = useDerivedValue(() => interpolate(scroll.value, [0, MAX_SCROLL], [0, 1], Extrapolate.CLAMP), [scroll])

  const titleAnimStyle = useAnimatedStyle(() => ({
    opacity: progress.value
  }))

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <View style={[styles.iconContainer, {justifyContent: "flex-start"}]} >
        {
          loading ? <ActivityIndicator color={Palette.white} /> : <IconButton style={styles.icon} IconComponent={SearchIcon} />
        }
      </View>
      <Animated.Text style={[titleAnimStyle, styles.title]} >Inbox</Animated.Text>
      <View style={[styles.iconContainer, {justifyContent: "flex-end"}]} >
        <IconButton style={styles.icon} IconComponent={SendIcon} />
        <View style={styles.iconDivider} />
        <IconButton style={styles.icon} IconComponent={SettingsIcon} onPress={openSettings} />
      </View>
    </View>
  );
};

export default NavigationBar;
import React from 'react';
import { Text} from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';

import styles from './titleStyle'

const MAX_SCROLL = 75

interface Props {
  scroll: Animated.SharedValue<number>
}

const Title: React.FC<Props> = ({scroll}) => {
  const progress  = useDerivedValue(() => interpolate(scroll.value, [0, MAX_SCROLL], [0, 1], Extrapolate.CLAMP), [scroll])

  const animStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value
  }))
  
  return (
    <Animated.View style={[animStyle, styles.container]} >
      <Text style={styles.welcomeText} >Welcome</Text>
      <Text style={styles.inboxText} >Inbox</Text>
    </Animated.View>
  );
};



export default Title;
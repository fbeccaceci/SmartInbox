import React, { useCallback } from 'react';
import {Pressable, ViewStyle, StyleProp, PressableStateCallbackType} from 'react-native';

import styles from './iconButtonStyles'

interface Props {
  style?: ViewStyle;
  IconComponent: React.FC<{style?: ViewStyle | StyleProp<ViewStyle>}>
  onPress?(): void
}

const IconButton: React.FC<Props> = ({style, IconComponent, onPress}) => {

  const styleForState = useCallback(({pressed}: PressableStateCallbackType) => ({
    ...style,
    opacity: pressed ? 0.5 : 1
  }), [style])

  return (
    <Pressable style={styleForState} onPress={onPress} >
      <IconComponent style={styles.icon} />
    </Pressable>
  );
};

export default IconButton;
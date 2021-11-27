import React, { useCallback } from 'react';
import {View, Button} from 'react-native';
import { useAppDispatch } from '@redux/hooks';

import styles from './settingsScreenStyles'
import { logOutUser } from '@redux/thunks';

const SettingsScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  const onLogoutPressed = useCallback(() => {
    dispatch(logOutUser())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={onLogoutPressed} />
    </View>
  );
};


export default SettingsScreen;
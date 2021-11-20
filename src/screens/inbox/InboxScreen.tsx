import React from 'react';
import {View, Text} from 'react-native';

import styles from './inboxStyle';
import {NavigationBar} from './components'

const InboxScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationBar />
    </View>
  );
};

export default InboxScreen;

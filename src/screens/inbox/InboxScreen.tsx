import React from 'react';
import {View, Text} from 'react-native';

import styles from './inboxStyle';

const InboxScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
};

export default InboxScreen;

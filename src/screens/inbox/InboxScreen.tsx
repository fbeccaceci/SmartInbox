import React from 'react';
import {View, Text} from 'react-native';

import styles from './inboxStyle';
import {NavigationBar} from './components'

const InboxScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationBar />

      <Text>
        <Text style={styles.welcomeText} >Welcome to{'\n'}</Text>
        <Text>Inbox</Text>
      </Text>
    </View>
  );
};

export default InboxScreen;

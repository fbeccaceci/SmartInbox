import React from 'react';
import {View } from 'react-native';
import WebView from 'react-native-webview'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './mailViewStyles'
import { NavigationBar } from './components';
import { InboxStackParamList } from '@navigators';

type Props = NativeStackScreenProps<InboxStackParamList, "mailView">

const MailViewScreen: React.FC<Props> = ({route, navigation}) => {
  const {mail} = route.params

  return (
    <View style={styles.container}>
      <NavigationBar title={mail.subject} goBack={() => navigation.pop()} />
      <WebView 
        style={styles.webView} 
        originWhitelist={['*']}
        source={{ html: mail.htmlContent }} />
    </View>
  );
};

export default MailViewScreen
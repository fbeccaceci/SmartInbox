import React from 'react';
import {View, Text} from 'react-native';

import styles from './inboxStyle';
import {InboxCard, NavigationBar} from './components'
import { InboxCardModel } from '@models';

const cards: InboxCardModel[] = [
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  }
]

const InboxScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationBar />

      <Text style={styles.headerContainer} >
        <Text style={styles.welcomeText} >Welcome to{'\n'}</Text>
        <Text style={styles.inboxText} >Inbox</Text>
      </Text>

      <InboxCard model={cards[0]} />
    </View>
  );
};

export default InboxScreen;

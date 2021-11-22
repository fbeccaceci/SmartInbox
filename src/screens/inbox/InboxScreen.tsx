import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Animated, {useSharedValue, useAnimatedScrollHandler} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './inboxStyle';
import {InboxCard, NavigationBar, Title} from './components'
import { InboxCardModel } from '@models';
import { Padding } from '@styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const cards: InboxCardModel[] = [
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
  {
    profilePicture: "https://w3schools.com/howto/img_avatar.png",
    sender: "Mario Rossi",
    object: "Random Mail object",
    content: "Some random content of the mail, some more random content, again even more random content, and again and again",
    date: new Date()
  },
]

const InboxScreen: React.FC = () => {
  const insets = useSafeAreaInsets()

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      scrollY.value = contentOffset.y
    }
  })

  const ItemSeparator = <View style={styles.flatListItemSeparator} />

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16} 
        style={styles.flatList}
        contentContainerStyle={[styles.flatListContent, {paddingBottom: insets.bottom + Padding.m}]}
        ListHeaderComponent={() => <NavigationBar scroll={scrollY} />}
        ListHeaderComponentStyle={styles.flatListHeaderContainer}
        stickyHeaderIndices={[0]}
        data={cards} 
        renderItem={({item, index}) => {
          if(index === 0) {
            return <>
              <Title scroll={scrollY} />
              <InboxCard model={item as InboxCardModel} />
            </>
          }
          return <InboxCard model={item as InboxCardModel} />
        }}
        ItemSeparatorComponent={() => ItemSeparator} />
    </View>
  );
};

export default InboxScreen;

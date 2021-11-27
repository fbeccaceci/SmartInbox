import React, { useMemo } from 'react';
import {View, FlatList} from 'react-native';
import Animated, {useSharedValue, useAnimatedScrollHandler} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './inboxStyle';
import {InboxCard, NavigationBar, Title} from './components'
import { InboxCardModel } from '@models';
import { Padding } from '@styles';
import { useFetchAllMails } from '@hooks';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const InboxScreen: React.FC = () => {
  const insets = useSafeAreaInsets()

  const mails = useFetchAllMails()
  const cards = useMemo(() => {
    if(!mails) return ['title']
    
    const cards = mails.map(mail => ({
      sender: mail.senderDisplayName,
      object: mail.subject,
      content: mail.preview,
      date: new Date(mail.date)
    }))

    return ['title', ...cards]
  }, [mails])

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
        contentContainerStyle={[styles.flatListContent, {paddingBottom: insets.bottom}]}
        ListHeaderComponent={() => <NavigationBar scroll={scrollY} />}
        ListHeaderComponentStyle={styles.flatListHeaderContainer}
        stickyHeaderIndices={[0]}
        data={cards} 
        renderItem={({item, index}) => {
          if(index === 0) {
            return <>
              <Title scroll={scrollY} />
            </>
          }
          return <>
            <InboxCard model={item as InboxCardModel} />
            {ItemSeparator}
          </>
        }} />
    </View>
  );
};

export default InboxScreen;

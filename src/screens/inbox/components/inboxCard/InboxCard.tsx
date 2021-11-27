import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Image from 'react-native-fast-image'
import moment from 'moment'

import styles from './inboxCardStyle'
import { InboxCardModel } from '@models';


interface Props {
  model: InboxCardModel;
  onPress?(): void;
}
 
const InboxCard: React.FC<Props> = ({model, onPress}) => {

  const timeAgo = moment(model.date).fromNow()

  const NoProfilePictureImage = <View style={[styles.profilePicture, {justifyContent: "center", alignItems: "center"}]} >
    <Text style={styles.noProfilePictureLetter} >{model.sender.slice(0, 1)}</Text>
  </View>

  return (
    <Pressable style={styles.card} onPress={onPress} >
      {model.profilePicture 
        ? <Image source={{uri: model.profilePicture}} style={styles.profilePicture} />
        : NoProfilePictureImage}
      <View style={{flex: 1}} >
        <View style={styles.topRow} >
          <View style={{flex: 1}} >
            <View style={{flexDirection: "row", alignItems: "center" }} >
              <Text style={styles.senderText} numberOfLines={1} >{model.sender}</Text>
              <Text style={styles.timeAgoText} numberOfLines={1} >{timeAgo}</Text>
            </View>
            <Text style={styles.objectText} numberOfLines={1} >{model.object}</Text>
          </View>
        </View>
        <Text style={styles.contentText} numberOfLines={4} >{model.content}</Text>
      </View>
    </Pressable>
  );
};

export default InboxCard;
import {StyleSheet, Dimensions} from 'react-native';
import {Padding, Palette, Typography} from '@styles'

const WIDTH = Dimensions.get("window").width

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Palette.background,
  },
  flatList: {
    width: "100%",
  },
  flatListContent: {
    width: "100%",
    alignItems: "center",
  },
  flatListHeaderContainer: {
    width: WIDTH,
    backgroundColor: Palette.background
  },
  flatListItemSeparator: {
    height: Padding.xl
  },
});

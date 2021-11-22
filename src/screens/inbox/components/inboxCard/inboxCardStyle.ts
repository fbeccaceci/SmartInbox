import { StyleSheet, Dimensions } from 'react-native'
import { Padding, Palette, Typography } from '@styles'

const dimensions = Dimensions.get("window")
const CARD_WIDTH = dimensions.width - 2 * Padding.xl
const PROFILE_PICTURE_SIZE = 50

export default StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: Palette.card,
    borderRadius: 12,
    padding: 12 + Padding.s,
    flexDirection: "row"
  },
  profilePicture: {
    height: PROFILE_PICTURE_SIZE,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: Padding.m,
    backgroundColor: Palette.cardPrimaryContent
  },
  noProfilePictureLetter: {
    ...Typography.primary,
    color: Palette.card,
    fontSize: 24
  },
  topRow: {
    flexDirection: "row",
    height: PROFILE_PICTURE_SIZE,
    alignItems: "center"
  },
  senderText: {
    ...Typography.primary,
    flex: 1
  },
  objectText: {
    ...Typography.secondary,
  },
  timeAgoText: {
    ...Typography.ternary,
    fontSize: 11,
    flex: 0.7
  },
  contentText: {
    ...Typography.ternary,
    marginTop: Padding.s,
  }
})
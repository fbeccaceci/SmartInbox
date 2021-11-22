import { StyleSheet } from 'react-native'
import { Padding, Typography } from '@styles'
import {AppConstants} from '@utils'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: AppConstants.navBarHeight,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.xl
  },
  icon: {
    height: "50%",
    aspectRatio: 1,
  },
  title: {
    ...Typography.primary,
    fontSize: 22
  }
})
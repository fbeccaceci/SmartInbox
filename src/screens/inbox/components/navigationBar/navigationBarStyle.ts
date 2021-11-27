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
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "50%",
    aspectRatio: 1,
  },
  iconDivider: {
    width: Padding.m
  },
  title: {
    ...Typography.primary,
    fontSize: 22,
  }
})
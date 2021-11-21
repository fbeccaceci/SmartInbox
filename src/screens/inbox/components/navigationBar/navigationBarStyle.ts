import { StyleSheet } from 'react-native'
import { Padding } from '@styles'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.xl
  },
  icon: {
    height: "50%",
    aspectRatio: 1,
  }
})
import {StyleSheet} from 'react-native';
import {Padding, Palette, Typography} from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Palette.background
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: Padding.xl,
    marginVertical: Padding.m
  },
  welcomeText: { 
    ...Typography.pageTitle,
    fontFamily: "Poppins-Regular",
    fontSize: 24
  },
  inboxText: {
    ...Typography.pageTitle,
    lineHeight: 60
  }
});

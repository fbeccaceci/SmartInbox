import {StyleSheet} from 'react-native';
import {Palette, Typography} from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Palette.background
  },
  welcomeText: { 
    ...Typography.pageTitle,
    fontFamily: "Poppins-Bold"
  }
});

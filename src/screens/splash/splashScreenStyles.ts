import { StyleSheet } from "react-native";
import { Palette } from "@styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.background
  },
  splashImage: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: 10000
  }
})
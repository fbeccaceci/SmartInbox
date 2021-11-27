import { Palette } from "@styles";
import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.background,
    width: "100%",
  },
  webView: {
    width: WIDTH,
    height: "100%",
  }
})
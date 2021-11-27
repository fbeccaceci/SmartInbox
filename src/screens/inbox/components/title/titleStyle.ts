import { Padding, Typography } from "@styles";
import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width

export default StyleSheet.create({
  container: {
    marginVertical: Padding.m,
    width: WIDTH,
    paddingHorizontal: Padding.xl
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
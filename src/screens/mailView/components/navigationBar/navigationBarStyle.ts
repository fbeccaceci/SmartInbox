import { Padding, Typography } from "@styles";
import { AppConstants } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: AppConstants.navBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Padding.xl
  },
  icon: {
    height: "50%",
    aspectRatio: 1,
  },
  title: {
    ...Typography.primary,
    fontSize: 18,
    width: "70%",
    textAlign: "center"
  }
})
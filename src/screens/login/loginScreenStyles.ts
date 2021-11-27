import { Padding, Palette, Typography } from "@styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background
  },
  backgroundImage: {
    width: "100%",
    height: "70%",
    borderBottomRightRadius: 1000
  },
  loginContainer: {
    paddingHorizontal: Padding.xl,
    flex: 1,
    justifyContent: "center"
  },
  title: {
    ...Typography.pageTitle,
    paddingVertical: Padding.m,
    fontSize: 28
  },
  loginButton: {
    width: "100%",
    backgroundColor: Palette.white,
    padding: Padding.m,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: Padding.m
  },
  buttonLabel: {
    ...Typography.primary,
    color: Palette.background,
    fontFamily: "Poppins-Regular",
  },
  googleIcon: {
    height: 24,
    aspectRatio: 1,
    marginRight: Padding.m
  }
})
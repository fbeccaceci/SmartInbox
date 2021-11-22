import { Padding, Typography } from "@styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
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
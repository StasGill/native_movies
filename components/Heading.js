import React from "react";
import { Text, StyleSheet } from "react-native";

export const Heading = ({ title, size = "h1" }) => {
  return <Text style={styles[size]}>{title}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginBottom: 10,
  },
  h2: {
    fontWeight: "bold",
    marginBottom: 5,
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
  },
});

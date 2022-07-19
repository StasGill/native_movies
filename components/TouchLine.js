import React from "react";
import { StyleSheet, View } from "react-native";

export const TouchLine = () => {
  return (
    <View style={styles.touchLineContainer}>
      <View style={styles.touchLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchLineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  touchLine: {
    width: 100,
    height: 4,
    backgroundColor: "#616161",
    textAlign: "center",
  },
});

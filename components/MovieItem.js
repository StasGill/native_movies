import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const MovieItem = ({ title, img }) => {
  const posterQuery = `https://image.tmdb.org/t/p/w300${img}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: posterQuery }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    backgroundColor: "white",
    marginHorizontal: "2%",
    marginVertical: 7,
    borderRadius: 8,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  image: {
    width: "100%",
    height: 400,

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 17,
    justifyContent: "center",
  },
});

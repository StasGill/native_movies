import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const MovieItem = ({ title, img, id, item, media_type }) => {
  const navigation = useNavigation();
  const posterQuery = `https://image.tmdb.org/t/p/w300${img}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("MovieItem", { id, media_type })}
      >
        <Image
          source={{ uri: posterQuery }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: "45%",
    width: "100%",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    // flexBasis: "40%",
    height: 250,

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
    color: "#303030",
  },
});

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export const FindItem = ({ item }) => {
  const navigation = useNavigation();
  const posterQuery = `https://image.tmdb.org/t/p/w300${item.item.poster_path}`;

  const cutString = () => {
    if (item.item.overview.length > 165) {
      let trimmedString = item.item.overview.substring(0, 165);
      return trimmedString + "...";
    }
    return item.item.overview + "...";
  };
  cutString();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("FindItem", {
          id: item.item.id,
          media_type: "movie",
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: posterQuery }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.item.title}</Text>
          <Text style={styles.text}>{cutString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    backgroundColor: "white",
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
    width: 120,
    height: 170,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    width: 280,
    flexDirection: "column",
    padding: 10,
  },
  imageContainer: {
    width: 120,
  },
  heading: {
    fontWeight: "bold",

    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        fontSize: 14,
      },
    }),
  },
});

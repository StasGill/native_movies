import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function CastItem({ name, img, item, type = "CastItem" }) {
  const posterQuery = `https://image.tmdb.org/t/p/w300${img}`;
  const navigation = useNavigation();

  return (
    <>
      {img && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate(type, { id: item.id })}
        >
          <View style={styles.container}>
            <Image
              source={{ uri: posterQuery }}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.text}>{name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    width: 130,
  },
  image: {
    height: 170,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: { marginHorizontal: 5, marginVertical: 7, textAlign: "center" },
});

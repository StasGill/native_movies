import { Text, View, StyleSheet, Image } from "react-native";

export function CastItem({ name, item }) {
  const posterQuery = `https://image.tmdb.org/t/p/w300${item.profile_path}`;

  return (
    <>
      {item.profile_path && (
        <View style={styles.container}>
          <Image
            source={{ uri: posterQuery }}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.text}>{name}</Text>
        </View>
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
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: { marginHorizontal: 5, marginVertical: 7, textAlign: "center" },
});

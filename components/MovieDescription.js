import { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { getActorById, getCastById, getMovieById } from "../api/api";
import { CastItem } from "./CastItem";

export function MovieDescription({ route }) {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const { id, media_type } = route.params;
  const posterQuery = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const image = { uri: posterQuery };

  useEffect(() => {
    setMovie({});
    getMovieById(id, media_type).then(({ data }) => setMovie(data));
    getCastById(id, media_type).then(({ data }) => setCast(data));
  }, [id]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{movie.name || movie.title}</Text>
          <Text style={styles.subHeading}>Genre :</Text>
          <ScrollView
            style={styles.pillsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {movie.genres?.map((item) => (
              <Text style={styles.pills} key={item.id}>
                {item.name}
              </Text>
            ))}
          </ScrollView>
          <Text style={styles.subHeading}>Year :</Text>
          <Text style={styles.text}>
            {movie.release_date || movie.last_air_date}
          </Text>
          <Text style={styles.subHeading}>Score :</Text>
          <Text style={styles.text}>{movie.vote_average}</Text>
          <Text style={styles.subHeading}>Description :</Text>
          <Text style={styles.text}>{movie.overview}</Text>
          <Text style={styles.subHeading}>Cast :</Text>
          <ScrollView
            style={styles.pillsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {cast.cast?.map((item) => (
              <CastItem name={item.name} item={item} key={item.id} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    paddingBottom: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    // marginBottom: 38,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 500,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 100,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
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
  text: {
    color: "#5d5e5e",
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
  },
  pillsContainer: { flexDirection: "row", paddingVertical: 10 },
  pills: {
    fontSize: 20,
    marginRight: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 7,
  },
  button: {
    marginBottom: 100,
  },
});

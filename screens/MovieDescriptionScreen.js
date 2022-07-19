import { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { getCastById, getMovieById } from "../api/api";
import { CastItem } from "../components/CastItem";
import { TouchLine } from "../components/TouchLine";
import { Heading } from "../components/Heading";

export const MovieDescriptionScreen = ({ route }) => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const { id, media_type } = route.params;
  const ref = useRef();
  const posterQuery = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const image = { uri: posterQuery };

  useEffect(() => {
    ref.current.scrollTo({ animated: true, offset: 0 });
    setMovie({});
    getMovieById(id, media_type).then(({ data }) => setMovie(data));
    getCastById(id, media_type).then(({ data }) => setCast(data));
  }, [id]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        ref={ref}
      >
        <View style={styles.textContainer}>
          <TouchLine />
          <Heading title={movie.name || movie.title} />
          <Heading title={"Genre :"} size={"h2"} />
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
          <Heading title={"Year :"} size={"h2"} />
          <Text style={styles.text}>
            {movie.release_date || movie.last_air_date}
          </Text>
          <Heading title={"Score :"} size={"h2"} />
          <Text style={styles.text}>{movie.vote_average}</Text>
          <Heading title={"Description :"} size={"h2"} />
          <Text style={styles.text}>{movie.overview}</Text>
          <Heading title={"Cast :"} size={"h2"} />
          <ScrollView
            style={styles.pillsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {cast.cast?.map((item) => (
              <CastItem
                name={item.name}
                img={item.profile_path}
                item={item}
                key={item.id}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    // paddingBottom: 80,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  list: {},
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
  pillsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
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

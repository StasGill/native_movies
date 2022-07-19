import { useCallback, useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  getActorById,
  getActorByIdMovie,
  getActorByIdSocial,
} from "../api/api";
import { CastItem } from "../components/CastItem";
import { Heading } from "../components/Heading";
import { Icons } from "../components/Icons";
import { MovieItem } from "../components/MovieItem";
import { TouchLine } from "../components/TouchLine";

export function CastDescriptionScreen({ route }) {
  const [cast, setCast] = useState({});
  const [movies, setMovies] = useState([]);
  const [social, setSocial] = useState([]);
  const ref = useRef();
  const { id } = route.params;
  const posterQuery = `https://image.tmdb.org/t/p/original${cast?.profile_path}`;

  const image = { uri: posterQuery };

  const handlePress = useCallback(async () => {
    const supportedURL = `instagram://user?username=${social?.instagram_id}`;

    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);
    Linking.openURL(supportedURL);

    // if (supported) {
    //   // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //   // by some browser in the mobile
    //   await Linking.openURL(supportedURL);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    // }
  });

  useEffect(() => {
    ref.current.scrollTo({ animated: true, offset: 0 });
    setCast({});
    getActorById(id).then((item) => setCast(item?.data));
    getActorByIdMovie(id).then((item) => setMovies(item?.data?.cast));
    getActorByIdSocial(id).then((item) => setSocial(item.data));
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
          <Heading title={cast.name} />
          <Heading title={"Birthday :"} size={"h2"} />
          <Text style={styles.text}>{cast.birthday}</Text>
          <Heading title={"Place of Birthday :"} size={"h2"} />
          <Text style={styles.text}>{cast.place_of_birth}</Text>
          {!!cast?.biography && (
            <>
              <Heading title={"Biography :"} size={"h2"} />
              <Text style={styles.text}>{cast?.biography}</Text>
            </>
          )}

          {!!social?.instagram_id && (
            <>
              <Heading title={"Social :"} size={"h2"} />
              <ScrollView
                style={styles.pillsContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity activeOpacity={1} onPress={handlePress}>
                  <Icons color={"grey"} type={"Instagram"} />
                </TouchableOpacity>
              </ScrollView>
            </>
          )}

          <Heading title={"Movies :"} size={"h2"} />
          <ScrollView
            style={styles.pillsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {movies?.map((item) => (
              <CastItem
                name={item.title || item.original_title}
                img={item.poster_path}
                item={item}
                type={"MovieItem"}
                key={item.id}
              />
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
  list: {},
  textContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 650,
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

import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { fetchTrend } from "../api/api";
import { Icons } from "../components/Icons";
import { MovieItem } from "../components/MovieItem";

export const TrendScreen = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [isConnected, setConnection] = useState(true);

  const isConnect = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        setConnection(true);
      } else {
        setConnection(false);
      }
    });
  };

  const loadMore = () => {
    fetchTrend(page).then((item) =>
      setMovies([...movies, ...item.data.results])
    );
    setPage(page + 1);
  };

  useEffect(() => {
    isConnect();
    fetchTrend().then((item) => setMovies(item.data.results));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isConnected ? (
        <FlatList
          key={"#"}
          data={movies}
          onEndReached={loadMore}
          onEndReachedThreshold={0.7}
          renderItem={({ item }) => (
            <MovieItem
              title={item.title || item.name}
              img={item.poster_path}
              id={item.id}
              item={item}
              media_type={item.media_type}
            />
          )}
          keyExtractor={(item) => "#" + item.id}
          showsVerticalScrollIndicator={false}
          // ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          ListHeaderComponentStyle={{ backgroundColor: "grey" }}
          style={styles.list}
          horizontal={false}
          numColumns={2}
        />
      ) : (
        <View style={styles.wifiContainer}>
          <Icons color={"grey"} type={"Connection"} />
          <Text style={styles.heading}>No internet</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    paddingBottom: 80,
  },
  wifiContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  },
  heading: {
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    color: "#5d5e5e",
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

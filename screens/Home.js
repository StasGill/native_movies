import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { fetchTrend } from "../api/api";
import { MovieItem } from "../components/MovieItem";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrend().then((item) => setMovies(item.data.results));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieItem title={item.title || item.name} img={item.poster_path} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          // ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          ListHeaderComponentStyle={{ backgroundColor: "grey" }}
        />
      </View>
    </SafeAreaView>
  );
};

//<Text>{item.title}</Text>

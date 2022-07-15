import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { findMovie } from "../api/api";
import { FindItem } from "./FindItem";
import { Icons } from "./Icons";

export const Find = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [isConnected, setConnection] = useState(false);

  const isConnect = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        setConnection(true);
      } else {
        setConnection(false);
      }
    });
  };

  const handleSubmit = (e) => {
    findMovie(query).then((item) => setSearch(item.data));
  };

  useEffect(() => {
    isConnect();
    findMovie("a").then((item) => setSearch(item.data));
  }, []);

  const loadMore = () => {};
  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Search movie"
              style={styles.input}
              onChangeText={setQuery}
              value={query}
              onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={search.results}
            renderItem={(item) => <FindItem item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        </>
      ) : (
        <View style={styles.wifiContainer}>
          <Icons color={"grey"} type={"Connection"} />
          <Text style={styles.heading}>No internet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#e3e3e3",
    paddingBottom: 77,
  },
  wifiContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    flex: 1,

    borderRadius: 8,
    marginRight: 5,
    ...Platform.select({
      ios: {
        padding: 10,
      },
      android: {
        padding: 5,
      },
    }),
  },
  button: {
    backgroundColor: "teal",
    width: 100,
    padding: 10,
    borderRadius: 8,
  },
  text: { textAlign: "center", fontWeight: "bold", color: "white" },
  inputContainer: { flexDirection: "row", padding: 5 },
  list: { paddingTop: 10 },
});

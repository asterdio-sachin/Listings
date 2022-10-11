import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ListCard from "../components/ListCard";
import Screen from "../components/Screen";
import routes from "../Navigation/routes";
import IconButton from "../components/IconButton";

import { loadAlbums, loadPhotos, loadUsers } from "../redux/dataAction";
import TitleText from "../components/TitleText";

function AlbumScreen({ navigation }) {
  const albums = useSelector((store) => store.data.albums);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadAlbums(json));
      })
      .catch((error) => {
        console.error(error);
      });

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadPhotos(json));
      })
      .catch((error) => {
        console.error(error);
      });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadUsers(json));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <ListCard
      index={item.id}
      title={item.title}
      onPress={() => navigation.navigate(routes.ALBUM_DETAILS, { album: item })}
    />
  );

  if (albums && albums.length === 0)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );

  return (
    <Screen style={styles.container}>
      <TitleText title="ALBUMS" />
      <FlashList
        data={albums}
        renderItem={renderItem}
        estimatedItemSize={100}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <IconButton
        name="add-outline"
        onPress={() => navigation.navigate(routes.ALBUM_FORM)}
        size={30}
        color="white"
        style={styles.addButton}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f8f4f4" },
  addButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    elevation: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});

export default AlbumScreen;

import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/Card";
import Screen from "../components/Screen";
import { loadData } from "../redux/dataAction";

function ListingScreen(props) {
  const data = useSelector((store) => store.data.data);

  const dispatch = useDispatch();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadData(json));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data && data.length === 0)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );

  return (
    <Screen style={styles.container}>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            imageUrl={item.url}
            thumbnailUrl={item.thumbnailUrl}
          />
        )}
        estimatedItemSize={5000}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f8f4f4" },
});

export default ListingScreen;

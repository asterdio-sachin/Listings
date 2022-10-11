import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/Card";

import Screen from "../components/Screen";
import TitleText from "../components/TitleText";
import ScreenHeader from "../components/ScreenHeader";

function AlbumDetailScreen({ navigation, route }) {
  const { album } = route.params;

  const user = useSelector(
    (store) => store.data.users.filter((i) => i.id === album.userId)[0]
  );

  const photos = useSelector((store) =>
    store.data.photos.filter((i) => i.albumId === album.id)
  );

  return (
    <Screen style={styles.container}>
      <ScreenHeader title={album.title} onPress={() => navigation.goBack()} />
      <View style={styles.userContainer}>
        <TitleText
          style={{ fontSize: 18, paddingHorizontal: 0 }}
          title={"By:"}
        />
        <Text style={{ paddingLeft: 20, fontSize: 16 }}>{user.name}</Text>
        <Text style={{ paddingLeft: 20, fontSize: 16 }}>{user.email}</Text>
        <Text style={{ paddingLeft: 20, fontSize: 16 }}>{user.phone}</Text>
        <Text style={{ paddingLeft: 20, fontSize: 16 }}>{user.website}</Text>
      </View>
      {photos && photos.length === 0 ? null : (
        <>
          <TitleText style={{ fontSize: 18 }} title={"Photos"} />
          <FlashList
            data={photos}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                imageUrl={item.url}
                thumbnailUrl={item.thumbnailUrl}
              />
            )}
            estimatedItemSize={20}
            contentContainerStyle={{ paddingVertical: 20 }}
          />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f8f4f4" },
  userContainer: { paddingLeft: 30, paddingBottom: 20 },
});

export default AlbumDetailScreen;

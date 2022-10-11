import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

function Card({ title, imageUrl, thumbnailUrl }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        preview={{ uri: thumbnailUrl }}
        uri={imageUrl}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default Card;

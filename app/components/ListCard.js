import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

function ListCard({ index, title, subtitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.15,
            justifyContent: "center",
            borderRightWidth: 0.5,
            paddingVertical: 10,
            borderColor: "red",
          }}
        >
          <Text style={styles.index}>{index}</Text>
        </View>
        <View style={{ flex: 0.85 }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    minHeight: 70,
  },
  index: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
    flexShrink: 1,
    textAlign: "justify",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default ListCard;

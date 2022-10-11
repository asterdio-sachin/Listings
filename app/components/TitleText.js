import React from "react";
import { StyleSheet, Text } from "react-native";

function TitleText({ title, style }) {
  return <Text style={[styles.container, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 48,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default TitleText;

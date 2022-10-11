import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPress, color = "tomato" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;

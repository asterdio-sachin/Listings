import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

function AppTextInput({ title, ...otherProps }) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        placeholderTextColor="#6e6969"
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  text: {
    marginBottom: 5,
    paddingLeft: 5,
  },
  textInput: {
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default AppTextInput;

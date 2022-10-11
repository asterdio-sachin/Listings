import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import TitleText from "./TitleText";

function ScreenHeader({ onPress, title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton name="chevron-back" size={32} onPress={onPress} />
      <TitleText
        style={{ fontSize: 28, textTransform: "capitalize" }}
        title={title}
      />
    </View>
  );
}

export default ScreenHeader;

import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ name, size = 24, color = "black", onPress, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

export default IconButton;

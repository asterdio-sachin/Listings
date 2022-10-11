import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import AlbumScreen from "../screen/AlbumScreen";
import AlbumDetailScreen from "../screen/AlbumDetailScreen";
import AlbumFormScreen from "../screen/AlbumFormScreen";

const Stack = createNativeStackNavigator();

const AlbumNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ALBUMS} component={AlbumScreen} />
    <Stack.Screen name={routes.ALBUM_DETAILS} component={AlbumDetailScreen} />
    <Stack.Screen name={routes.ALBUM_FORM} component={AlbumFormScreen} />
  </Stack.Navigator>
);

export default AlbumNavigator;

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import ListingScreen from "./app/screen/ListingScreen";
import { store } from "./app/redux/store";
import AlbumNavigator from "./app/Navigation/AlbumNavigatior";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AlbumNavigator />
      </NavigationContainer>
    </Provider>
  );
}

import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";

import Card from "../components/Card";
import Screen from "../components/Screen";
import { loadData } from "../redux/dataAction";

const SCREEN_WIDTH = Dimensions.get("window").width;

function ListingScreen(props) {
  const tempData = useSelector((store) => store.data.data);

  const dispatch = useDispatch();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadData(json));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (tempData && tempData.length === 0)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );

  const data = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(tempData);

  const layoutProvider = new LayoutProvider(
    (i) => {
      return "NORMAL";
    },
    (type, dim) => {
      switch (type) {
        case "NORMAL":
          dim.width = SCREEN_WIDTH;
          dim.height = 250;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      }
    }
  );

  const rowRenderer = (type, data) => {
    const { title, url, thumbnailUrl } = data;
    return <Card title={title} imageUrl={url} thumbnailUrl={thumbnailUrl} />;
  };

  return (
    <Screen style={styles.container}>
      <RecyclerListView
        rowRenderer={rowRenderer}
        dataProvider={data}
        layoutProvider={layoutProvider}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f8f4f4" },
});

// function ListingScreen(props) {
//   const data = useSelector((store) => store.data.data);

//   const dispatch = useDispatch();

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch(loadData(json));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (data && data.length === 0)
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="tomato" />
//       </View>
//     );

//   return (
//     <Screen style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         initialNumToRender={10}
//         maxToRenderPerBatch={10}
//         updateCellsBatchingPeriod={50}
//         contentContainerStyle={{ padding: 20 }}
//         renderItem={({ item }) => (
//           <Card
//             title={item.title}
//             imageUrl={item.url}
//             thumbnailUrl={item.thumbnailUrl}
//           />
//         )}
//       />
//     </Screen>
//   );
// }

export default ListingScreen;

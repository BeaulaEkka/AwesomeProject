import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
} from "react-native";

import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 14:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/dark_clouds.jpg")}
        style={styles.image}
      />
      <SafeAreaView style={styles.overlay}>
        <View style={styles.renderItem}>
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  renderItem: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 5,
    // borderColor: "red",
    paddingTop: "50%",
  },
});

export default UpcomingWeather;

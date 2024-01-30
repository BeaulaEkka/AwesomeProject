import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      {/* <CurrentWeather /> */}
      <City />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.image}
      >
        <View style={styles.cityWrapper}>
          <Text style={[styles.cityName, styles.cityText]}>Rotterdam</Text>
          <Text style={[styles.countryName, styles.cityText]}>
            The Netherlands
          </Text>
          <View style={styles.populationwrapper}></View>
          <View style={styles.riseSetWrapper}>
            <Feather name={"sunrise"} size={50} color={"white"} />
            <Text style={styles.riseSetText}>10:46:58am</Text>
            <Feather name={"sunset"} size={50} color={"white"} />
            <Text style={styles.riseSetText}>17:46:58pm</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cityWrapper: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alighSelf: "center",
    fontWeight: "bold",

    color: "white",
  },
  populationwrapper: {
    alighItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 38,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;

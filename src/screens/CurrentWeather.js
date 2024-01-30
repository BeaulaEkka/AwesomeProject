import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function currentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100}></Feather>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>
          <Text style={styles.text}>Its a perfect t-shirt day</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // backgroundColor: "white",
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

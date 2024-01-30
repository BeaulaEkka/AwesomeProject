import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;

  let icon = "sun";
  if (condition === "Rain") {
    icon = "cloud-rain";
  } else if (condition === "Clear") {
    icon = "sun";
  } else if (condition === "Clouds") {
    icon = "cloud";
  }
  return (
    <View style={styles.subcontainer}>
      <View>
        <Feather name={icon} color={"white"} size={50} />
      </View>
      <View>
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.min}>{min}</Text>
        <Text style={styles.max}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 20,
  },

  min: {
    color: "white",
    fontSize: 20,
  },
  max: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});

export default ListItem;

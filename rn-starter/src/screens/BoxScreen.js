import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "purple"
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    top: 100
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "blue"
  }
});

export default BoxScreen;

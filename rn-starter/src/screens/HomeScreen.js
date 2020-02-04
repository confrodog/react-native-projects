import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-native-stack';

const HomeScreen = ({ navigation }) => {
  //destructuring the 'props' object to 'navigation
  return (
    <View>
      <Text style={styles.text}>Happy Birthday Jake</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title='Go to List Demo'
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title='Go to Counter'
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title='Go to Random Color'
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title='Go to Square Color Manipulator'
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
      <Button
        title='Go to Text Screen'
        onPress={() => {
          navigation.navigate("Text");
        }}
      />
      <Button
        title='Go to Box Screen'
        onPress={() => {
          navigation.navigate("Box");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

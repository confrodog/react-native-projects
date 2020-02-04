import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newText => setName(newText)}
      />
      <Text>Enter a password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      <Text>My Name is {name}</Text>
      <Text>
        I have input a password that
        {password.length < 5 ? (
          <Text style={{ color: "red" }}> not </Text>
        ) : (
          " is "
        )}
        legal
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;

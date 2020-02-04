import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #0", age: 43 },
    { name: "Friend #1", age: 41 },
    { name: "Friend #2", age: 47 },
    { name: "Friend #3", age: 53 },
    { name: "Friend #4", age: 13 },
    { name: "Friend #5", age: 3 }
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: { name: 'Friend #1' }, index: 0 }
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 10
  }
});
export default ListScreen;

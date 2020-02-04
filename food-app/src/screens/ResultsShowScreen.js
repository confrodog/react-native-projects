import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, FlatList, Text } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  //api call
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.address}>
        <Text>Address:</Text>
        <Text>{result.location.address1}</Text>
        <Text>
          {result.location.city}, {result.location.zip_code}
        </Text>
      </View>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10
  },
  image: {
    height: 200,
    width: 300,
    marginLeft: 10,
    marginTop: 10
  },
  address: {
    marginLeft: 10,
    fontSize: 18
  }
});

export default ResultsShowScreen;

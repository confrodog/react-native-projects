import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state = (red: number, green: number, blue: number)
  //action = {type: string, payload: number}
  switch (action.type) {
    case "change_red":
      return state + action.payload > 255 || state + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state + action.payload > 255 || state + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state + action.payload > 255 || state + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //state = actual value being recorded, dispatch = how to update the state
  //reducer = a function that handles the dispatch and MUST RETURN a value
  //the object is all states that are instantiated & recorded
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //or can use useState from React for each state, i.e. let red = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT });
        }}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT });
        }}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT });
        }}
        color='Green'
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

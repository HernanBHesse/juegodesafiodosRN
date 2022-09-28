// React
import React from "react";

// React Native
import { View, StyleSheet } from "react-native";

//styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

//Component
const ButtonGroup = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default ButtonGroup;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

const Card = ({ children, style }) => {
  return (
  <View style={{ ...styles.container, ...style }}>
       {children}
    </View>)
};

export default Card;

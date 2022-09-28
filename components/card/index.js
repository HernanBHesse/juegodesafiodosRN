// React
import React from "react";

// React Native
import { StyleSheet, View } from "react-native";

//styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
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

//Component
const Card = ({ children, style }) => {
  return (
  <View style={{ ...styles.container, ...style }}>
       {children}
    </View>)
};

export default Card;

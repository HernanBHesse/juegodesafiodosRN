// React
import React from "react";

// React Native
import { TextInput, StyleSheet } from "react-native";

//Constants
import { colors } from "../../constants/color";

//Styles
const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    height: 30,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
});

//Component
const Input = ({ style, ...props }) => {
  return (
  <TextInput {...props} style={{ ...styles.input, ...style }}/>
)
};

export default Input;

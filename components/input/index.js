import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    height: 30,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
});

const Input = ({ style, ...props }) => {
  return (
  <TextInput {...props} style={{ ...styles.input, ...style }}/>
)
};

export default Input;

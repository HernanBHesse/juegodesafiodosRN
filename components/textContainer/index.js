// React
import React from "react";

//React Native
import { View, Text, StyleSheet } from "react-native";

//Constants
import { colors } from "../../constants/color.js";

//styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textInstruction: {
    fontFamily: "pBold",
    fontSize: 16,
    color: colors.gray,
  },
});

//Component
const TextContainer = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.textInstruction, ...style }}>{children}</Text>
    </View>
  );
};

export default TextContainer;

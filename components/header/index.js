// React
import React from "react";

// React Native
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/color";

//styles
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingTop: 50,
    color: colors.white,
    fontSize: 24,
    fontFamily: "pBlack",
  },
});

//Component
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

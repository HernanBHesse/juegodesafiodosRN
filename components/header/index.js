// React
import React from "react";

// React Native
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { colors } from "../../constants/color";

//Dimensions
const { width, height } = Dimensions.get("window");

//styles
const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "PoppinsBlack",
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

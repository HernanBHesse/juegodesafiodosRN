import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ButtonGroup, Card, NumberContainer } from "../components/index.js";
import {randomNumberGenerator} from "../utils/funtions.js";

//Constants
import { colors } from "../constants/color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    minHeight: 300,
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 40,
  }
});

const GameScreen = ({ selectedNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(randomNumberGenerator(1, 100, selectedNumber));
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Adivina ?</Text>
        <NumberContainer style={styles}>{currentNumber}</NumberContainer>
        <ButtonGroup style={styles.buttonContainer}>
          <Button
            title="Menor"
            onPress={() => null}
            color={colors.dismissButton}
          />
          <Button
            title="Mayor"
            onPress={() => null}
            color={colors.acceptButton}
          />
        </ButtonGroup>
      </Card>
    </View>
  );
};

export default GameScreen;

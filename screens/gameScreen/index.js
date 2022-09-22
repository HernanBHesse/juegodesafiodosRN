// React
import React, { useState } from "react";

// React Native
import { View, Text, StyleSheet, Button } from "react-native";

//Components
import {
  ButtonGroup,
  Card,
  NumberContainer,
  TextContainer,
} from "../../components/index.js";

//Functions
import { randomNumberGenerator } from "../../utils/funtions.js";

//Constants
import { colors } from "../../constants/color.js";

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    minHeight: 300,
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "pBold",
  },
  buttonContainer: {
    marginTop: 40,
  },
  instructionText: {},
  cardInstruction: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    minHeight: 200,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: colors.backgroundDark,
  },
});

//Screen Component
const GameScreen = ({ selectedNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(
    randomNumberGenerator(1, 100, selectedNumber)
  );
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>El numero es mayor o menor a ...</Text>
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
      <Card style={styles.cardInstruction}>
        <TextContainer style={styles.instructionText}>
          El juego consiste en adivinar el numero secreto en la menor cantidad
          de intentos, indicando si es menor o mayar al que se muestra en
          pantalla.
        </TextContainer>
      </Card>
    </View>
  );
};

export default GameScreen;

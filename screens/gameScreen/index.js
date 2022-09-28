// React
import React, { useState, useRef, useEffect } from "react";

// React Native
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from "react-native";

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

//Dimensions
const { width, height } = Dimensions.get("window");

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    height: height * 0.5,
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "PoppinsBold",
  },
  buttonContainer: {
    marginTop: 10,
    width: width * 0.6
  },
  instructionText: {
    fontFamily: "PoppinsItalic",
    fontSize: 14,
    color: colors.black,
  },
  cardInstruction: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    width: width * 0.8,
    maxheight: height * 0.4,
    backgroundColor: colors.backgroundDark,
  },
});

//Screen Component
const GameScreen = ({ selectedNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    randomNumberGenerator(1, 100, selectedNumber)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleNextNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("No mientas", "Sabes que esta mal", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = randomNumberGenerator(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, selectedNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>El numero es ...</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <ButtonGroup style={styles.buttonContainer}>
          <Button
            title="Menor"
            onPress={() => onHandleNextNumber("lower")}
            color={colors.dismissButton}
          />
          <Button
            title="Mayor"
            onPress={() => onHandleNextNumber("greater")}
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

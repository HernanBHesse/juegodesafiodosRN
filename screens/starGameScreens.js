// React
import React, { useState } from "react";

// React Native
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//Components
import {
  Card,
  Input,
  NumberContainer,
  ButtonGroup,
} from "../components/index.js";

//Constants
import { colors } from "../constants/color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    alignItems: "center",
    width: 350,
    maxWidth: "80%",
    marginTop: 20,
    padding: 10,
  },
  labelInput: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
  },
  textInput: {
    minWidth: 50,
    maxWidth: 80,
    textAlign: "center",
    fontSize: 30,
  },
  buttonContainer: {},
  summaryContainer: {
    alignItems: "center",
    width: 250,
    maxWidth: "80%",
    marginTop: 20,
    padding: 10,
  },
  summaryText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
  },
});

const StartGameScreen = ({ onStartGame }) => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  //Input validation
  const onHandleChange = (text) => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };

  // Button actions
  const onReset = () => {
    setNumber("");
    setSelectedNumber(0);
    setConfirmed(false);
    Keyboard.dismiss();
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(number, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber("");
  };

  const onHandleStartGame = () => {
    onStartGame(selectedNumber);
  };

  const confirmedOut = () =>
    confirmed && (
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tu selección:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Empezar juego"
          onPress={onHandleStartGame}
          color={colors.acceptButton}
        />
      </Card>
    );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.labelInput}>Elija un numero</Text>
          <Input
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleChange(text)}
            value={number}
          />
          <ButtonGroup style={styles.buttonContainer}>
            <Button
              title="Cancelar"
              onPress={onReset}
              color={colors.dismissButton}
            />
            <Button
              title="Comenzar"
              onPress={onConfirm}
              color={colors.acceptButton}
            />
          </ButtonGroup>
        </Card>
        {confirmedOut()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

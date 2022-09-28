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
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

//Components
import {
  Card,
  Input,
  NumberContainer,
  ButtonGroup,
} from "../../components/index.js";

//Constants
import { colors } from "../../constants/color.js";

//Dimensions
const { height, width } = Dimensions.get("window");

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
  },
  containerScroll: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "PoppinsBold",
  },
  inputContainer: {
    alignItems: "center",
    width: width * 0.8,
    maxWidth: "80%",
    marginTop: 10,
    padding: 10,
  },
  labelInput: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PoppinsBold",
  },
  textInput: {
    width: width * 0.2,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PoppinsItalic",
  },
  buttonContainer: {
    width: width * 0.7,
    marginBottom: 5,
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
  },
  summaryText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PoppinsBold",
  },
});

//Screen Component
const StartGameScreen = ({ onStartGame }) => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const onHandleChange = (text) => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };

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
        <Text style={styles.summaryText}>Tu selección es:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Empezar juego"
          onPress={onHandleStartGame}
          color={colors.acceptButton}
        />
      </Card>
    );

  return (
    <KeyboardAvoidingView
    style={styles.containerScroll}
      behavior={Platform.OS === "android" ? "padding" : "position"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Empieza el juego</Text>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

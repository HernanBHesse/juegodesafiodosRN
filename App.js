// React
import React, { useState } from "react";

// React Native
import { StyleSheet, View, ActivityIndicator } from "react-native";

//Components
import { Header } from "./components/index.js";
import {
  GameScreen,
  StartGameScreen,
  GameOverScreen,
} from "./screens/index.js";

// Fonts
import { useFonts } from "expo-font";

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [loaded] = useFonts({
    'PoppinsBlack': require("./assets/fonts/Poppins-Black.ttf"),
    'PoppinsBold': require("./assets/fonts/Poppins-Bold.ttf"),
    'PoppinsItalic': require("./assets/fonts/Poppins-Italic.ttf"),
    'PoppinsLight': require("./assets/fonts/Poppins-Light.ttf"),
    'PoppinsRegular': require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  const title = !userNumber ? "El numero X" : "Busca el numero";

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onGameOver = (roundsNumber) => {
    setRounds(roundsNumber);
  };

  const onRestartGame = () => {
    setUserNumber(0);
    setRounds(0);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} />
    );
  } else if (rounds > 0) {
    content = (
      <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={onRestartGame} />
    );
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}

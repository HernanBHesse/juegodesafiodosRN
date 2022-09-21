// React
import React, { useState } from "react";

// React Native
import { StyleSheet, View } from "react-native";

//Components
import { Header } from "./components/index.js";
import StartGameScreen from "./screens/starGameScreens.js";
import GameScreen from "./screens/game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const title = !userNumber ? "Adivina el numero" : "El numero es";
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />

  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}

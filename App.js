// React
import React, { useState } from "react";

// React Native
import { StyleSheet, View } from "react-native";

//Components
import { Header } from "./components/index.js";
import { GameScreen, StartGameScreen } from "./screens/index.js";

// Fonts
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    "pBlack": require("./assets/fonts/Poppins-Black.ttf"),
    "pBold": require("./assets/fonts/Poppins-Bold.ttf"),
    "pItalic": require("./assets/fonts/Poppins-Italic.ttf"),
    "pLight": require("./assets/fonts/Poppins-Light.ttf"),
    "pRegular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const title = !userNumber ? "El numero X" : "Busca el numero";
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}

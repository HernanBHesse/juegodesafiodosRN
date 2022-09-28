//React
import React, { useEffect, useState } from "react";

//React Native
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";

//Component
import { ButtonGroup, Card } from "../../components";

//Constants
import { colors } from "../../constants/color.js";

//Dimensions
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    margin: 10,
  },
  resultContainer: {
    width: width * 0.8,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerDetails: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  textResults: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
});

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortal = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", statePortal());

    return () => {
      Dimensions.removeEventListener("change", statePortal());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Card
        style={
          isPortrait ? styles.resultContainer : styles.resultContainerLandscape
        }
      >
        <Image
          source={{
            uri: "https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg?w=2000",
          }}
          style={styles.image}
        />
        <View style={styles.containerDetails}>
          <Text style={styles.textResults}>Intentos:  {roundsNumber}</Text>
          <Text style={styles.textResults}>El numero era:  {userNumber}</Text>
          <ButtonGroup>
            <Button
              title="Reiniciar"
              onPress={onRestart}
              color={colors.acceptButton}
            />
          </ButtonGroup>
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;

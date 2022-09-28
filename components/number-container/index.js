//React
import React from "react";

// React Native
import { View, Text, StyleSheet} from "react-native";

//Constants
import { colors } from "../../constants/color";

//Styles
const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        borderColor: colors.primary,
        borderWidth: 4,
        borderRadius: 20,
    },
    number: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "PoppinsItalic",
    },
})

//Component
const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )

}

export default NumberContainer;

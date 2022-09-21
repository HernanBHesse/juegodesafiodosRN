import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderColor: colors.primary,
        borderWidth: 4,
        borderRadius: 20,
    },
    number: {
        textAlign: "center",
        fontSize: 30,
    },
})

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )

}

export default NumberContainer;

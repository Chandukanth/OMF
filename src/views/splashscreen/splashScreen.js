import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../styles/styles";

const SplashScreen = ({ isDarkMode }) => {
    const styles = Styles(isDarkMode)
    return (
        <View style={styles.container}>

            <Text>Splash Screen</Text>

        </View>
    )

}
export default SplashScreen
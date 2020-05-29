import React from "react"
import { View, StyleSheet, Text } from "react-native";


function GameOverScreen(props) {
    return (
        <View style={styles.gameOverScreen}>
            <Text>Game Over</Text>
            <Text>Number of Rounds: {props.numOfRounds}</Text>
            <Text>Your number was: {props.userNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default GameOverScreen;
import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Button,Text, Alert } from "react-native";
import Number from "../components/Number"
import Card from "../components/Card";

function getRandomBetween(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}

function GameScreen(props) {
    const [currentNumGuess, setCurrentNumGuess] = useState(getRandomBetween(1, 100));
    const [rounds, setRounds] = useState(0);

    const currMin = useRef(1);
    const currMax = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentNumGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentNumGuess, userChoice, onGameOver]);

    function nextGuessHandler(direction) {
        if(direction === "lower" && currentNumGuess < props.userChoice || direction === "higher" && currentNumGuess > props.userChoice) {
            Alert.alert("Incorrect direction", "Use correct direction!", [{text: "ok", style: "cancel"}]);
            return;
        }

        if(direction === "lower"){
            currMax.current = currentNumGuess;
        } else {
            currMin.current = currentNumGuess;
        }

        setCurrentNumGuess(getRandomBetween(currMin.current, currMax.current));
        setRounds(currRounds => currRounds + 1)
    }

    return (
        <View style={styles.gameScreen}>
            <Text>Computers Guess</Text>
            <Number>{currentNumGuess}</Number>
            <Card style={styles.buttons}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, "lower")}/>
                <Button title="Higher" onPress={nextGuessHandler.bind(this, "higher")}/>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 8,
        alignItems: "center",
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        width: 300,
        maxWidth: "80%",
    }

});

export default GameScreen;
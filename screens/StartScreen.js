import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert  } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";

function StartScreen(props) {

    const [enteredNumber, setEnteredNumber] = useState("");
    const [userConfirmedNumber, setUserConfirmedNumber] = useState(false);
    const [inputNumber, setInputNumber] = useState();

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText.replace(/[^0-9]/g, "")); //regex to replace non numbers with empty string
    }

    function resetInputHandler() {
        setUserConfirmedNumber(false)
    }

    function confirmInputHandler() {
        let tmpNum = parseInt(enteredNumber);

        if(isNaN(tmpNum) || tmpNum <= 0 || tmpNum > 99)
        {
            Alert.alert("Invalid input", "You have to input a number between 1 an 99", [{text: "Ok", style: "default", onPress: resetInputHandler}]);
            return;
        }

        setUserConfirmedNumber(true);
        setInputNumber(tmpNum);
        setEnteredNumber("");
        Keyboard.dismiss();
    }

    let confirmedTextOutput;

    if(userConfirmedNumber){
        confirmedTextOutput = (
            <Card style={styles.numberOutput}>
                <Text>You selected</Text>
                <Number>{inputNumber}</Number>
                <Button title="Start Game" onPress={() => props.onStartGame(inputNumber)}/>
            </Card >
            );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
            <View style={ styles.startScreen }> 
                <Card style={ styles.inputContainer }>
                    <Text style={styles.title}>Select a number</Text>
                    <Input
                        onChangeText={numberInputHandler}
                        blurOnSubmit
                        keyboardType="number-pad"
                        autoCorrect={false}
                        maxLength={2} 
                        style={styles.inputNumber}
                        value={enteredNumber}
                    />
                    <View style={ styles.buttonsContainer }>
                        <View style={ styles.button }>
                            <Button title="Reset" onPress={resetInputHandler} color="purple"/>
                        </View>
                        <View style={ styles.button }>
                            <Button title="Confirm" onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedTextOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    startScreen: {
        flex: 1,
        padding: 8,
        alignItems: "center",
    },

    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        //shadow only for iOS, elevation for android
    },
    
    inputNumber: {
        textAlign: "center",
        width: 80,
        borderColor: "black",
        borderWidth: 1,
        padding: 4,
        borderRadius: 4
    },

    button: {
        width: 100,
    },

    numberOutput: {
        borderWidth: 2,
        borderColor: "black",
        alignItems: "center",
        marginVertical: 20
    },

    title: {
        fontSize: 20
    }
});

export default StartScreen;
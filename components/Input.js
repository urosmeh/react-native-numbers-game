import React from "react";
import { StyleSheet, TextInput } from "react-native";

function Input(props) {
    return (
        //...props takes all props and adds them to this component
        <TextInput {...props} style={ {...styles.input, ...props.style }} placeholder="number"></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical: 10,
    }
})

export default Input;
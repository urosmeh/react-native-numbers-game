import React from "react"
import { StyleSheet, View, Text } from "react-native";

function Number(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.numStyle}>{ props.children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    
    numStyle: {
        fontSize: 30
    }
});

export default Number;
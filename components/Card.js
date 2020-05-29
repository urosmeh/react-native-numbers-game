import React from "react"
import { StyleSheet, View } from "react-native";

function Card(props) {
    return (
        //{...styles.card, ...props.style} -> merges both styles, Card and own style from props.
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        //shadow only for iOS, elevation for android
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10,
    }
});

export default Card;
import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { TouchableHighlight } from "react-native";

const SuperButton = (props) => {
    return (
        <TouchableHighlight 
        style={style.superButton}
        onPress = { props.callback }
        >
        <View style={style.button}>
            <Text style={style.valor}>{props.valor}</Text>
        </View>
        

        </TouchableHighlight>
    )

}

const style = StyleSheet.create ({
    superButton: {

    },
    button: {
        backgroundColor: "crimson",
        alignItems: "center",
        padding: 12,
        width: 300,
        borderRadius: 20,
        marginTop: 12
    },
    valor: {
        fontSize: 15,
        fontFamily: "arial",
        fontWeight: "bold",
        color: "white"

    }


});

export default SuperButton;
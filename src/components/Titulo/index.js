import React from "react";
import { Text, StyleSheet } from "react-native";


function Título (props) {
    return (
        <Text style={css.titulo}>{props.Titulo}</Text>
    )
}
const css = StyleSheet.create({
   titulo: {
    color: 'crimson',
    fontSize: 40
   }
});

export default Título;
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const Body = (props) => {
    return(
        <View >
            <Text>{props.texto}</Text>
            <Button title={props.titulo}></Button>
        </View>
    );
}

export default Body;
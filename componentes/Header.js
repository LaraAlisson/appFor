import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>{this.props.texto}</Text>
                <Button title={this.props.titulo}></Button>
            </View>
        );
    }
    
}

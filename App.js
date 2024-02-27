import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import Body from './componentes/Body';
import Header from './componentes/Header';

export default function App() {



  return (
    <View style={{marginTop:30}}>
      <StatusBar style="auto" />
      <Body texto="Ola Body" titulo="clicle aqui"></Body>
      <Header texto="Ola Header" titulo="Aquie é o Header"></Header>
    </View>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native' // Fixed import

import params from './src/params'

export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o Mines!</Text>
          <Text style={styles.instructions}>Tamanho da grade:
            {params.getRowsAmount()}x{params.getColumnsAmount()}
          </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({ // Fixed StylesSheet with StyleSheet
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10, // Fixed 'martin' to 'margin'
  }
});

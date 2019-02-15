import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Example from './Components/Example.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>MY FIRST REACT NATIVE APP OMG</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

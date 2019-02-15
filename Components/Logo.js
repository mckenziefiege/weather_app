import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Logo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  componentDidMount () {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&APPID=4ae5e024451ce1a78afecaecbe9d77de')
      .then((resp) => resp.json())
      .then((resp) => this.setState({
        temperature: resp.main.temp
      }))
  }

  render () {
    return (
      <View>
        <Text>WEATHER APP</Text>
        <Text>{this.state.temperature}</Text>
      </View>
    );
  }
}

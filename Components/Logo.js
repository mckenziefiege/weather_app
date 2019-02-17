import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Logo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: "",
      currentTemp: 0,
      maxTemp: 0,
      minTemp: 0,
      description: ""
    }
  }

  componentDidMount () {
    return fetch ('http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&APPID=4ae5e024451ce1a78afecaecbe9d77de')
      .then((resp) => resp.json())
      .then((resp) => this.setState({
        city: resp.name,
        currentTemp: resp.main.temp,
        maxTemp: resp.main.temp_max,
        minTemp: resp.main.temp_min,
        description: resp.weather[0].description,
        icon: resp.weather[0].icon
      }))
  }

  render () {
    return (
      <View>
        <Button title="Add City" type="outline"/>
        <Text>{this.state.city}</Text>
        <Text>{this.state.description}</Text>
        <Text>Current Temperature {this.state.currentTemp}</Text>
        <Text>High {this.state.maxTemp}</Text>
        <Text>Low {this.state.minTemp}</Text>
      </View>
    );
  }
}

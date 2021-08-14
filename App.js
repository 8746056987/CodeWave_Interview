import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import Routes from './Routes'


console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}
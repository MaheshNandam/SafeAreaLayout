/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native';

import Router from './Router';

export default class App extends Component {
  render() {
    return(
      <Router />
    );
  }
}

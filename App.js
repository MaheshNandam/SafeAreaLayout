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
  View
} from 'react-native';

import SafeAreaLayout from './SafeAreaLayout';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaLayout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});

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

import SafeAreaLayout from './SafeAreaLayout';

export default class App extends Component<{}> {
  render() {
    return (
      <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
        <SafeAreaLayout />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});

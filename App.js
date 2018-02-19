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

export default class App extends Component<{}> {
  render() {
    return (
      <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <View style={styles.body}>
              <View style={styles.inlineBlock}>
                  <Text style={styles.welcome}>
                      border design fixes using <Text style={styles.titleText}>'SafeAreaView'</Text>
                  </Text>
              </View>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  body:{
      paddingHorizontal: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'red',
      borderWidth: 2,
  },
  inlineBlock:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
  },
  welcome: {
      fontSize: 15,
      color: '#000',
      marginVertical: 10,
  },
  titleText:{
    fontSize: 15,
    fontWeight: 'bold'
  }
});

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

export default class Page1 extends Component {
  render() {
    return(
      <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
          <StatusBar barStyle='light-content' />
          <View style={styles.body}>
              <View style={styles.inlineBlock}>
                  <Text style={styles.welcome}>
                      Page 1 Body
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
      backgroundColor: '#212121',
  },
  body:{
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: '#fff',
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

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
import CommonStyle from './CommonStyle';

export default class Page2 extends Component {
  render() {
    return(
      <SafeAreaView forceInset={{top: 'always'}} style={CommonStyle.container}>
          <StatusBar barStyle='light-content' />
          <View style={CommonStyle.body}>
              <View style={CommonStyle.inlineBlock}>
                  <Text style={CommonStyle.welcome}>
                      Page 2 body
                  </Text>
              </View>
          </View>
      </SafeAreaView>
    );
  }
}
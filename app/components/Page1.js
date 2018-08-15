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
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation'; //from ˆ2 version
import CommonStyle from './CommonStyle';

export default class Page1 extends Component {
  render() {
    return(
      <SafeAreaView style={CommonStyle.container}>
          <StatusBar barStyle='light-content' />
          <View style={CommonStyle.body}>
              <View style={CommonStyle.inlineBlock}>
                  <Text style={CommonStyle.welcome}>
                      Page 1 Body
                  </Text>
              </View>
          </View>
      </SafeAreaView>
    );
  }
}

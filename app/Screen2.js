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
import {StackNavigator, TabView , TabBarBottom, TabNavigator , TabBarTop, NavigationActions} from 'react-navigation';

export default class Screen2 extends Component {
  static navigationOptions={
    headerTitle:  'Tab 2',
    headerTitleStyle: {
        color: '#f9f9f9',
    },
    headerStyle:{
        backgroundColor: '#212121'
    },
    headerLeft: (<View></View>),
    headerRight: (<View></View>),
    tabBarLabel: 'Tab 2',
  };
  
  render() {
    return (
      <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
          <StatusBar barStyle='light-content' />
          <View style={styles.body}>
              <View style={styles.inlineBlock}>
                  <Text style={styles.welcome}>
                      New Features :
                  </Text>
                  <Text style={styles.instructions}>
                      - " The round edges, cut off at the top and home indicator "
                  </Text>
              </View>
              <View style={styles.inlineBlock}>
                  <Text style={styles.welcome}>
                      Note :
                  </Text>
                  <Text style={styles.instructions}>
                      - Using SafeAreaView component, we can adjust the layout to fit to the the screen over the top face censor and corners and home
                      indicator.
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
      backgroundColor: '#000',
  },
  body:{
      flex: 1,
  },
  inlineBlock:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
  },
  welcome: {
      fontSize: 15,
      color: '#fff',
      marginVertical: 10,
  },
  instructions: {
      fontSize: 13,
      color: '#fff',
      flexWrap: 'wrap',
      marginBottom: 5,
      lineHeight: 22,
  },
});

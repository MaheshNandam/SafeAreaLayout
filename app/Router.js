import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//Tab Screens
import Home from './components/Home';

const AppNavigator = createStackNavigator(
  {
    screen1: {
      screen: Home,
      navigationOptions: {
        title: 'Header',
      }
    },
  },
  {
    initialRouterName: 'bottomTab',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#212121",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 14,
        fontWeight: '800',
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1
      }
    },
  }
);

export default class Router extends Component {
  render(){
    return <AppNavigator />;
  }
};

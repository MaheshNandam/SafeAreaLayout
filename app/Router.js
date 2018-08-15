import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//Tab Screens
import Home from './components/Home';

const AppNavigator = createStackNavigator(
  {
    mainPage: {
      screen: Home,
      navigationOptions: {
        title: 'Header',
      }
    },
  },
  {
    initialRouterName: 'mainPage',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "green",
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

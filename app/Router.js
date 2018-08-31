import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PageHeader from './PageHeader';

//Tab Screens
import Home from './components/Home';

const AppNavigator = createStackNavigator(
  {
    mainPage: {
      screen: Home,
      navigationOptions:({navigation})=>({
        headerTitle: <PageHeader navigation={navigation}/>,
        headerLeft: null,
        headerRight: null
      })
    },
  },
  {
    // initialRouterName: 'mainPage',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000",
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

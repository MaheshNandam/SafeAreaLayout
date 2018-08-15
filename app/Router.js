import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator ,createBottomTabNavigator } from 'react-navigation';

//Tab Screens
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const BottomNavigator = createBottomTabNavigator(
  {
    screen1: {
      screen: Page1,
      navigationOptions:{
        title: 'Screen 1',
      }
    },
    screen2:{
      screen: Page2,
      navigationOptions: {
        title: 'Screen 2',
      }
    }
  },
  {
    initialRouterName: 'screen2',
    swipeEnabled: true,
    tabBarOptions:{
      activeTintColor: 'blue',
      inactiveTintColor: '#000'
    },
  }
)

const AppNavigator = createStackNavigator(
  {
    bottomTab: {
      screen: BottomNavigator,
      navigationOptions:{
        title: 'Page Header',
        headerLeft: <View></View>,
        headerRight: <View></View>
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

import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

//Tab Screens
import Page1 from './app/Page1';
import Page2 from './app/Page2';

const AppNavigator = TabNavigator(
  {
    page1: {
      screen: Page1
    },
    page2:{
      screen: Page2
    }
  },
  {
    tabBarOptions:{
      activeTintColor: 'blue',
      inactiveTintColor: '#000'
    },
    tabBarComponent:TabBarBottom,
    tabBarPosition: 'bottom',
    initialRouterName: 'page1',
    animationEnabled: true,
    swipeEnabled: true
  }
)

export default class Router extends Component {
  render(){
    return <AppNavigator />;
  }
};

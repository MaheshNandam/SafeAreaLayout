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
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation'; //from ˆ2 version
import CommonStyle from './CommonStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: true
    }
  }

  check = () => {
    this.setState({ toggleValue: !this.state.toggleValue });
  }

  bodyView(bodyText) {
    return (
      <View style={CommonStyle.body}>
        <StatusBar barStyle='light-content' />
        <Text style={CommonStyle.welcome}>
          {
            bodyText
          }
        </Text>
      </View>
    )
  }

  renderToggle() {
    if (this.state.toggleValue) {
      return (
        <SafeAreaView forceInset={{ bottom: 'always' }} style={CommonStyle.container}>
          <TouchableWithoutFeedback onPress={this.check}>
            {
              this.bodyView('With SafeAreaView')
            }
          </TouchableWithoutFeedback>
        </SafeAreaView>
      )
    }
    else {
      return (
        <TouchableWithoutFeedback onPress={this.check}>
          <View style={CommonStyle.container}>
            {
              this.bodyView('Without SafeAreaView')
            }
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  render() {
    return (
      this.renderToggle()
    );
  }
}

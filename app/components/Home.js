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

  textView(bodyText) {
    return (
      <View style={CommonStyle.body}>
        <StatusBar barStyle='light-content' />
        <Text style={CommonStyle.welcome}>{bodyText}</Text>
        <TouchableWithoutFeedback onPress={this.check}>
          <View style={CommonStyle.buttonStyle}>
            <Text>Click Here</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  renderToggle() {
    if (this.state.toggleValue) {
      return (
        <SafeAreaView forceInset={{ bottom: 'always' }} style={CommonStyle.container}>
          {this.textView('With SafeAreaView')}
        </SafeAreaView>
      )
    }
    else {
      return (
        <TouchableWithoutFeedback onPress={this.check}>
          <View style={CommonStyle.container}>
            {this.textView('Without SafeAreaView')}
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

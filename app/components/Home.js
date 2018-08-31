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
import { SafeAreaView, NavigationActions} from 'react-navigation'; //from ˆ2 version
import CommonStyle from './CommonStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: true
    }
    this.renderPage = this.renderPage.bind(this);
  }

  check(title){
    this.setState(prevState => { toggleValue: !prevState.toggleValue });
  }

  pageContent(headerTitle) {
    return (
      <View style={CommonStyle.body}>
        <StatusBar barStyle='light-content' />
        <View style={CommonStyle.pageContent}>
          <View style={[CommonStyle.textView, {justifyContent: 'flex-start'}]}>
            <Text style={CommonStyle.edgeText}>Top Text</Text>
          </View>
          <Text style={CommonStyle.centerText}>{headerTitle}</Text>          
          <TouchableWithoutFeedback onPress={() => { this.check(headerTitle)}}>
            <View style={CommonStyle.buttonStyle}>
              <Text>{'Click Here'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={[CommonStyle.textView, { justifyContent: 'flex-end' }]}>
            <Text style={CommonStyle.edgeText}>Bottom Text</Text>
          </View>
        </View>
      </View>
    )
  }

  renderPage() {
    if (this.state.toggleValue) {
      return (
        <SafeAreaView forceInset={{ bottom: 'always' }} style={CommonStyle.container}>
          {this.pageContent('With SafeAreaView')}
        </SafeAreaView>
      )
    }
    else {
      return (
        <TouchableWithoutFeedback onPress={this.check}>
          <View style={CommonStyle.container}>
            {
              this.pageContent('Without SafeAreaView')
            }
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  render() {
    return (
      this.renderPage()
    );
  }
}

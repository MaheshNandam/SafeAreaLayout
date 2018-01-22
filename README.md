# SafeAreaLayout

At Glimpse, On iPhone X, the SafeAreaView provides support for your app from top to bottom, edge to edge alignment in portrait orientation, This helps you to prevent interface elements from getting clipped or covered by positioning them away from the sensor housing, the display's rounded corners, and the Home indicator. 

Support : 
    - both ios and android

Requirements: 

    RN Version - >= 0.50

    Android Studio - >= 3.0.0

    xCode - >= 9.0 

How to Use:

    import React, { Component } from 'react';
    import {
        Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar
    } from 'react-native';

    export default class SafeAreaLayout extends Component<{}> {
        render() {
            return (
                <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
                    <View />
                </SafeAreaView>
            );
        }
    }


How to execute:

    Step1 - git clone https://github.com/MaheshNandam/SafeAreaLayout.git;

    Step2 - react-native init SafeAreaLayout

    Step3 - react-native run-ios


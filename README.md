# SafeAreaLayout

At Glimpse, On iPhone X, the SafeAreaView provides support for your app from top to bottom, edge to edge alignment in portrait orientation, This helps you to prevent interface elements from getting clipped or covered by positioning them away from the sensor housing, the display's rounded corners, and the Home indicator. 

Support : 

    - both ios and android
    
Before & After Implementation Screenshots:


Requirements: 

    RN Version - >= 0.50

    Android Studio - >= 3.0.0

    xCode - >= 9.0 

How to Use:

    import React, { Component } from 'react';
    import {
        ..
        View,
        SafeAreaView
    } from 'react-native';

    export default class SafeAreaLayout extends Component {
        render() {
            return (
                <SafeAreaView forceInset={{bottom: 'always'}}>
                    <View />
                </SafeAreaView>
            );
        }
    }    
    
Note: 

    forceInset - useful to apply force padding on the view, because in few cases 'SafeAreaView' drives unexpected incorrect alignment of the view due to its onLayout function calls measureInWindow on the views, 
    
    forceInset={{ object: 'Value' }}, here 'object' key's are - 'top, bottom, left, right, vertical, horizontal', and value key's are - 'always, never, interger'.

How to execute:

    Step1 - git clone https://github.com/MaheshNandam/SafeAreaLayout.git;

    Step2 - react-native init SafeAreaLayout

    Step3 - react-native run-ios


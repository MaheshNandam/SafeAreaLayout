# SafeAreaLayout

At Glimpse, On iPhone X, the SafeAreaView provides support for your app from top to bottom, edge to edge alignment in portrait orientation, This helps you to prevent interface elements from getting clipped or covered by positioning them away from the sensor housing, the display's rounded corners, and the Home indicator. 

Support : 

    - both ios and android
    
Before & After Implementation Screenshots:

<img width="413" alt="screen shot 2018-02-19 at 4 01 34 pm" src="https://user-images.githubusercontent.com/13198616/36374403-3d9dcd1c-1591-11e8-9c6f-5e0a094c4428.png">

<img width="386" alt="screen shot 2018-02-19 at 3 57 07 pm" src="https://user-images.githubusercontent.com/13198616/36374478-770a8978-1591-11e8-9ea1-2c6b209ba74d.png">



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


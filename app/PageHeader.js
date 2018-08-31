import React,{ Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import CommonStyle from './components/CommonStyle';

export default class PageHeader extends Component{
    
    render(){      
        return(
            <View style={CommonStyle.headerStyle}>
                <Text style={CommonStyle.headerText}>{'Page Title'}</Text>
            </View>
        )
    }
}
import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

let { height, width } = Dimensions.get('window');

import DeviceInfo from 'react-native-device-info';

const CommonStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },
    body: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#B5B9BD',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    inlineBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 15,
        fontWeight: '800',
        color: '#000',
        marginVertical: 10,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonStyle: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        alignItems: 'center',
        shadowOpacity: 1,
        shadowRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
        marginTop: 40,
        marginHorizontal: 30,
    },
    //pageHeader 
    headerStyle:{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    pageContent:{
        flex: 1
    },
    textView:{
        alignItems: 'center',
        flex: 1,
    },
    centerText:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 18
    },
    edgeText:{
        fontSize: 18,
        fontWeight: 'bold',

    }
    
});

module.exports = CommonStyle;

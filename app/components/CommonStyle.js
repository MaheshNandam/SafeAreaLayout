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
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 15,
        color: '#000',
        marginVertical: 10,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

module.exports = CommonStyle;

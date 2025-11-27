import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

export const styles = StyleSheet.create({
    bigRectangle:{
        backgroundColor: '#bcd4a8',
        width: 316.4,
        height: 124.2,
        borderRadius: 16,
        margin: 10,
    },
    miniRectangle:{
        backgroundColor: '#e2e9dcff',
        width: 151.9,
        height: 46.6,
        borderRadius: 16,
        top: 40,
        marginLeft: 10,
    },
    titleContainer:{
        bottom: 125,
        width: 300,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontWeight: 500,
        fontSize: 16,
        top: 35,
        marginLeft: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
    },
    local: {
        fontSize: 18,
        fontWeight: 900,
        top: 20,
        color: 'white',
    },
    distance: {
        fontSize: 18,
        fontWeight: 400,
        top: 20,
        marginRight: 5,
        color: 'white',
    },
    icon: {
        width: 50,
        height: 50,
    },
    iconContainer: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
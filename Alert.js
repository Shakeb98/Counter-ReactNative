import { Text, StyleSheet, View, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default class myAlert extends Component {
    alertCheck = () => {
        Alert.alert(
            'Alert Box',
            'Confirm Cancel Or Ok',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('You have clicked Cancel'),
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => this.props.navigation.goBack()
                }
            ]
        );
    }

    render() {
        return (
            <View style={styles.fullScreen}>
                <TouchableOpacity style={styles.button} onPress={this.alertCheck}>
                    <Text style={styles.buttonText}>Click here for alert</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'green',
        height: 40,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    }
})
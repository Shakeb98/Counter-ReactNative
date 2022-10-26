import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import myClipboard from './myClipboard';
import FetchClipboardData from './FetchClipboardData';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="myClipboard" component={myClipboard} />
                    <Stack.Screen name="FetchClipboardData" component={FetchClipboardData} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


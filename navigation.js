import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import LoginPage from './LoginPage';
import OtpScreen from './OtpScreen';
import TicketBooking from './TicketBooking';
import ColorInput from './ColorInput';
import BottomTabNavigator from './TabNavigation'

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="LoginPage" component={LoginPage} />
                    <Stack.Screen name="OtpScreen" component={OtpScreen} />
                    <Stack.Screen name="TicketBooking" component={TicketBooking} />
                    <Stack.Screen name="ColorInput" component={ColorInput} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


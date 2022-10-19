import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';
import { LoginPage } from './LoginPage';
import { OtpScreen } from './OtpScreen';
import { TicketBooking } from './TicketBooking';
import { ColorInput } from './ColorInput';

const drawer = createDrawerNavigator();

export default class Drawer extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <drawer.Navigator>
                    <drawer.Screen name="Home" component={HomeScreen} />
                    <drawer.Screen name="Assignment-1" component={LoginPage} />
                    <drawer.Screen name="Assignment-2" component={OtpScreen} />
                    <drawer.Screen name="Assignment-3" component={TicketBooking} />
                    <drawer.Screen name="Assignment-4" component={ColorInput} />
                </drawer.Navigator>
            </NavigationContainer>
        )
    }
}
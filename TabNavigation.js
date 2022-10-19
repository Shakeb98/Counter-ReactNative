import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { LoginPage } from './LoginPage';
import { OtpScreen } from './OtpScreen';
import { TicketBooking } from './TicketBooking';
import { ColorInput } from './ColorInput';
import {Alert1} from './Alert1';
import { Alert2 } from './Alert2';
import { Alert3 } from './Alert3';
import { Alert4 } from './Alert4';
import MyntraScreen from './MyntraScreen';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="MEN CLOTHING" component={MyntraScreen} 
                    options={{
                        tabBarLabel:'Home',
                        tabBarIcon:() =>
                        <Image style={styles.tabIcon} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/709873.png')} />  
                    }}
                    />
                    <Tab.Screen name="Alert-1" component={Alert1}
                    options={{
                        tabBarLabel:'Categories',
                        tabBarIcon:() =>
                        <Image style={styles.categoryIcon} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/sorting-answers.png')} />,
                    }}
                    />
                    <Tab.Screen name="Alert-2" component={Alert2} 
                    options={{
                        tabBarLabel:'My Cart',
                        tabBarIcon:() =>
                        <Image style={styles.cartIcon} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/shopping-cart.png')} />
                    }}
                    
                    />
                    <Tab.Screen name="Alert-3" component={Alert3}
                    options={{
                        tabBarLabel:'Wishlist',
                        tabBarIcon:() =>
                        <Image style={styles.wishlistIcon} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/wish-list.png')} />
                    }}
                    />
                    <Tab.Screen name="Alert-4" component={Alert4}
                    options={{
                        tabBarLabel:'Account',
                        tabBarIcon:() =>
                        <Image style={styles.accountIcon} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/guest-male.png')} />
                    }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
const styles=StyleSheet.create({
    tabIcon:{
        height:25,
        width:30
    },
    categoryIcon:{
        height:28,
        width: 35   
    },
    cartIcon:{
        height:25,
        width: 25   
    },
    wishlistIcon:{
        height:25,
        width:25
    },
    accountIcon:{
        height:35,
        width:25
    }
})

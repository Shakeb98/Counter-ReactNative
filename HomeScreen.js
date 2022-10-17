import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class HomeScreen extends Component {
    constructor(props) {
        super(props)
        console.log('Navigation', props)
    }
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.heading}>
                        Assignments List
                    </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.assignmentOneButton} onPress={() => this.props.navigation.navigate('LoginPage')}>
                        <Text style={styles.assignmentOneText}>
                            Assignment-1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.assignmentTwoButton} onPress={() => this.props.navigation.navigate('OtpScreen')}>
                        <Text style={styles.assignmentTwoText}>
                            Assignment-2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.assignmentThreeButton} onPress={() => this.props.navigation.navigate('TicketBooking')}>
                        <Text style={styles.assignmentThreeText}>
                            Assignment-3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.assignmentFourButton} onPress={() => this.props.navigation.navigate('ColorInput')}>
                        <Text style={styles.assignmentFourText}>
                            Assignment-4
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    assignmentOneButton: {
        top: 30,
        height: 60,
        width: 200,
        backgroundColor: 'green',
        marginLeft: 93,
        padding: 20
    },
    assignmentTwoButton: {
        top: 35,
        height: 60,
        width: 200,
        backgroundColor: 'red',
        marginLeft:93,
        padding:20
    },
    assignmentThreeButton: {
        top: 40,
        height: 60,
        width: 200,
        backgroundColor: 'blue',
        marginLeft:93,
        padding:20
    },
    heading: {
        top: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    assignmentOneText:{
        color: 'white',
        marginLeft:27,
        fontWeight:'bold',
        fontSize: 16
    },
    assignmentTwoText:{
        color:'white',
        marginLeft:27,
        fontSize:16,
        fontWeight:'bold'
    },
    assignmentThreeText:{
        color:'white',
        marginLeft:27,
        fontSize:16,
        fontWeight:'bold'
    },
    assignmentFourButton: {
        top: 45,
        height: 60,
        width: 200,
        backgroundColor: 'black',
        marginLeft:93,
        padding:20
    },
    assignmentFourText:{
        color:'white',
        marginLeft:27,
        fontSize:16,
        fontWeight:'bold'
    }
})
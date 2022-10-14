import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class OtpScreen extends Component {
    constructor() {
        super();
        this.state = {
            pin1: '',
            pin2: '',
            pin3: '',
            pin4: ''
        }
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.loginText}>Log into Saavn</Text>
                </View>
                <View style={styles.code}>
                    <Text style={styles.codeText}>Enter your code</Text>
                </View>
                <View style={styles.textInput} placeholder="enter code">
                    <TextInput
                        keyboardType='numeric'
                        ref={'pin1ref'}
                        onChangeText={(pin1) => {
                            this.setState({ pin1: pin1 })
                            if (pin1 != '') {
                                this.refs.pin2ref.focus()
                            }

                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                alert('You need to enter otp')
                            }
                            if (this.state.pin1 != null && (nativeEvent.key == 1 || nativeEvent.key == 2 || nativeEvent.key == 3 || nativeEvent.key == 4 || nativeEvent.key == 5 || nativeEvent.key == 6 || nativeEvent.key == 7 || nativeEvent.key == 8 || nativeEvent.key == 9 || nativeEvent.key == 0)) {
                                this.refs.pin2ref.focus()                                
                            }
                        }}
                        value={this.state.pin1}
                        style={styles.input}
                        maxLength={1}
                        autoFocus={true}>
                        <Text style={styles.textValue}></Text>
                    </TextInput>
                    <TextInput
                        keyboardType='numeric'
                        ref={'pin2ref'}
                        onChangeText={(pin2) => {
                            this.setState({ pin2: pin2 })
                            if (pin2 != '') {
                                this.refs.pin3ref.focus()
                            }
                            else {
                                this.refs.pin1ref.focus()
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                this.refs.pin1ref.focus()
                            }
                            if (this.state.pin2 != null && (nativeEvent.key == 1 || nativeEvent.key == 2 || nativeEvent.key == 3 || nativeEvent.key == 4 || nativeEvent.key == 5 || nativeEvent.key == 6 || nativeEvent.key == 7 || nativeEvent.key == 8 || nativeEvent.key == 9 || nativeEvent.key == 0)) {
                                this.refs.pin3ref.focus()
                            }
                        }}
                        value={this.state.pin2}
                        style={styles.input}
                        maxLength={1}
                    >
                        <Text style={styles.textValue}></Text>
                    </TextInput>
                    <TextInput
                        keyboardType='numeric'
                        ref={'pin3ref'}
                        onChangeText={(pin3) => {
                            this.setState({ pin3: pin3 })
                            if (pin3 != '') {
                                this.refs.pin4ref.focus()
                            }
                            else {
                                this.refs.pin2ref.focus()
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                this.refs.pin2ref.focus()
                            }
                            if (this.state.pin3 != null && (nativeEvent.key == 1 || nativeEvent.key == 2 || nativeEvent.key == 3 || nativeEvent.key == 4 || nativeEvent.key == 5 || nativeEvent.key == 6 || nativeEvent.key == 7 || nativeEvent.key == 8 || nativeEvent.key == 9 || nativeEvent.key == 0)) {
                                this.refs.pin4ref.focus()

                            }
                        }}
                        value={this.state.pin3}
                        style={styles.input}
                        maxLength={1}>
                        <Text style={styles.textValue}></Text>
                    </TextInput>
                    <TextInput
                        keyboardType='numeric'
                        ref={'pin4ref'}
                        onChangeText={(pin4) => {
                            this.setState({ pin4: pin4 })
                            if (pin4 != '') {
                                alert('Thanks for otp')
                            }
                            else {
                                this.refs.pin3ref.focus()
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            nativeEvent.key === 'Backspace' ? this.refs.pin3ref.focus() : null
                        }}
                        value={this.state.pin4}
                        style={styles.input}
                        maxLength={1}>
                        <Text style={styles.textValue}></Text>
                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    row1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        height: 85,
        backgroundColor: 'rgb(109,188,120)'
    },
    loginText: {
        top: 55,
        marginLeft: 145,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    codeText: {
        marginLeft: 135,
        fontSize: 17
    },
    code: {
        top: 60
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        width: 40,
        padding: 12
    },
    textInput: {
        width: 230,
        top: 110,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 80,
    },
    continueButton: {
        borderColor: 'green',
        borderWidth: 1,
        top: 168,
        marginLeft: 72,
        marginRight: 130,
        height: 40,
        width: 250,
        borderTopWidth: 2
    },
    continueButtonText: {
        padding: 9,
        marginLeft: 78,
        fontSize: 17,
        color: 'rgb(109,188,120)'
    }

})

export default OtpScreen
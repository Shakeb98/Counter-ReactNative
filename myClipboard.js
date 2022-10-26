import { Text, StyleSheet, View, TouchableOpacity, Clipboard, TextInput } from 'react-native'
import React, { Component } from 'react';
import styles from './myClipboardUI';

export default class myClipboard extends Component {
    state={
        textValue:''
    }
    copyClipboard = () => {
        Clipboard.setString(this.state.textValue);
    }
    
    render() {
        return (
            <View style={styles.fullScreen}>
                <TextInput style={styles.inputText} onChangeText={(textValue) => this.setState({ textValue })}></TextInput>
                <TouchableOpacity onPress={this.copyClipboard} style={styles.setButton}>
                    <Text>Copy Data to Clipboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressButton} onPress={() => this.props.navigation.navigate('FetchClipboardData')}>
                    <Text>Press</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


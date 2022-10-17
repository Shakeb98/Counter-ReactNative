import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class ColorInput extends Component {
    constructor() {
        super();
        this.state = {
            colorCode: '',
            viewColor: ''
        }
    }

    displayColor = () => {
        this.setState({viewColor : this.state.colorCode.toLocaleLowerCase()})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.colorBox,{backgroundColor:this.state?.viewColor}]}>
                </View>
                <View>
                    <TextInput style={styles.inputArea} placeholder='Enter Input Code' onChangeText={(colorCode) => this.setState({ colorCode })} >
                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={this.displayColor}>
                        <Text>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
    
}
const styles = StyleSheet.create({
    colorBox: {
        height: 150,
        width: 150,
        borderWidth: 2,
        borderColor: 'black',
        top: 50
    },
    container: {
        alignItems: 'center'
    },
    inputArea: {
        padding: 10,
        borderWidth: 2,
        width: 150,
        top: 90,
    },
    submitButton: {
        borderWidth: 2,
        width: 100,
        padding: 22,
        top: 130,
        backgroundColor: 'gainsboro'
    }
})

export default ColorInput
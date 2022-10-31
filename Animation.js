import { Text, StyleSheet, View, Animated } from 'react-native'
import React, { Component } from 'react'

export default class Animation extends Component {
    state = {
        textOpacity: new Animated.Value(0),
        textSize: new Animated.Value(0),
        spinValue: new Animated.Value(0)
    }

    componentDidMount = () => {
        Animated.timing(this.state.textOpacity, {
            toValue: 1,
            duration: 3000
        }).start();
        Animated.timing(this.state.textSize, {
            toValue: 100,
            duration: 3000
        }).start();
        Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 3000
        }).start(); 
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ opacity: this.state.textOpacity }}>
                    <Animated.Text style={{
                        color:'red',
                        fontSize: this.state.textSize,
                        transform: [{ rotate: this.state.spinValue.interpolate({
                                inputRange: [0, 0.2,0.4,0.6,0.7,1],
                                outputRange: ['0deg','60deg','180deg' ,'60deg','360deg','180deg'],
                            })
                        }]
                    }}>Shakeb</Animated.Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
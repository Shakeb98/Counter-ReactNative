import { Text, View, StyleSheet, Switch } from 'react-native'
import React, { Component } from 'react'
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

export class mySlider extends Component {
    state = { sliderValue: 0, switchValue: false };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.state.switchValue ? this.state.sliderValue:''}
                </Text>
                <Slider
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="black"
                    value={this.state.value}
                    onValueChange={sliderValue => this.setState({ sliderValue })}
                />
                <Switch
                    value={this.state.switchValue}
                    onValueChange={(switchValue) => this.setState({ switchValue })} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        top: 100,
        marginLeft: 10,
        marginRight: 10
    }
});

export default mySlider
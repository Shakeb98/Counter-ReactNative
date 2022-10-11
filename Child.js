import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Child extends Component {

    constructor(props) {
        super(props);
        console.log('Child : Constructor is called  when component is  initiated  and set up the initial value')
        this.state = {};
    }


    static getDerivedStateFromProps() {
        console.log('Child  : Method will run after rendering of parent component')
        return null;
    }

    componentDidMount() {
        console.log('Child : This method is called after component is rendered');
    }

    shouldComponentUpdate() {
        console.log('Child : This method returns a Boolean value that specifies whether React should continue with the rendering or not.');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('Child : After upadation,In this method we can check what the values were before the update.');
        return null;
    }

    componentDidUpdate() {
        console.log('Child : Method is called after the component is updated in the Dom');
    }

    componentWillUnmount() {
        console.log('Child : The componentWillUnmount method is called when the component is about to be removed from the Dom');
    }


    render() {
        console.log('Child  : This method is required, and is the method that actually outputs the HTML to the Dom')
        return (
            <View>
                <Text style={styles.counterValue}>{this.props.counter}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    counterValue: {
        textAlign: "center",
        fontSize: 120,
        margin: 100,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 150
    }
});

export default Child
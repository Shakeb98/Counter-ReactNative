import React, { Component } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Child from "./Child";

class App extends React.Component {

  constructor() {
    super();
    console.log('Constructor is called  when component is  initiated  and set up the initial value')
    this.state = {
      counter: 0
    }
  }


  static getDerivedStateFromProps() {
    console.log('This method is called right before rendering the element in Dom')
    return null;
  }

  componentDidMount() {
    console.log('This method is called after component is rendered');
  }

  shouldComponentUpdate() {
    console.log('This method returns a Boolean value that specifies whether React should continue with the rendering or not.');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('After upadation,In this method we can check what the values were before the update.');
    return null;
  }

  increment = () => {
    if (this.state.counter < 10) {
      this.setState({ counter: this.state.counter + 1 })
    }
  }

  componentDidUpdate() {
    console.log('This Method is called after the component is updated in the Dom');
  }

  componentWillUnmount() {
    console.log('The componentWillUnmount method is called when the component is about to be removed from the Dom');
  }

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  reset = () => {
    this.setState({ counter: 0 })
  }

  render() {
    console.log('This method is required, and is the method that actually outputs the HTML to the Dom');
    return (
      <SafeAreaView>
        <Text style={styles.Name}>Counter Application</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.increment}>
            <View style={styles.incrementButton}>
              <Text style={styles.incrementIcon}>+</Text>
            </View>
          </TouchableOpacity>

          <Child counter={this.state.counter} />

          <TouchableOpacity onPress={this.decrement}>
            <View style={styles.decrementButton}>
              <Text style={styles.decrementIcon}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.reset}>
            <View>
              <Text style={styles.resetButton}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  incrementButton: {
    borderRadius: 25,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginLeft: 125,
    backgroundColor: 'green',
    height: 100,
    padding: 0
  },
  decrementButton: {
    borderRadius: 25,
    alignItems: 'center',
    width: 150,
    backgroundColor: 'red',
    marginLeft: 125,
    height: 100,
    padding: 0
  },
  incrementIcon: {
    fontSize: 50
  },
  decrementIcon: {
    marginTop: 5,
    padding: 10,
    fontSize: 50
  },
  Name: {
    marginTop: 30,
    marginLeft: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  resetButton: {
    borderRadius: 8,
    marginLeft: 175,
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
export default App;
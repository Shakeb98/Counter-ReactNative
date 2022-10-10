import React, { Component } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      name:''
    }
  }

  increment = () => {
    if(this.state.counter <10)
    {
    this.setState({ counter: this.state.counter + 1 })
    } 
  }

  decrement = () => {
    if(this.state.counter>0)
    {
    this.setState({ counter: this.state.counter - 1 })
    }
  }
  
  reset  = () =>  {
    this.setState({counter:0})
  }

  render() {
    console.log('render');
    return (
      <SafeAreaView>
        <Text style={styles.Name}>Counter Application</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.increment}>
            <View style={styles.incrementButton}>
              <Text style={styles.incrementIcon}>+</Text>
            </View>
          </TouchableOpacity>

          <Child counter = {this.state.counter}/>

          <TouchableOpacity onPress={this.decrement}>
            <View style={styles.decrementButton}>
              <Text style={styles.decrementIcon}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.reset}>
            <View>
              <Text style ={styles.resetButton}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  },
  incrementButton: {
    borderRadius:25,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginLeft: 125,
    backgroundColor: 'green',
    height: 100,
    padding: 0
  },
  decrementButton: {
    borderRadius:25,
    alignItems: 'center',
    width: 150,
    backgroundColor: 'red',
    marginLeft: 125,
    height: 100,
    padding: 0
  },
  incrementIcon:{
    fontSize:50
  },
  decrementIcon:{
    marginTop:5,
    padding:10,
    fontSize:50
  },
  Name:{
    marginTop:30,
    marginLeft:60,
    fontSize:30,
    fontWeight:'bold',
    textDecorationLine: 'underline'
  },
  resetButton:{

    borderRadius:8,
    marginLeft : 175,
    marginTop:50,
    fontSize:20,
    fontWeight:'bold',
    textDecorationLine: 'underline'
  }
});
export default App;
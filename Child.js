import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <View>
        <Text style={styles.counterValue}>{this.props.counter}</Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
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
import { Text, StyleSheet, View, TouchableOpacity, Clipboard, Alert } from 'react-native'
import React, { Component } from 'react'

export default class FetchClipboardData extends Component {
  state = {
    copiedValue: ''
  }

  fetchData = async () => {
    // this.state.copiedValue = await Clipboard.getString()
    const val = await Clipboard.getString();
    // console.log('val',val);
    this.setState({ copiedValue: val })
  }

  render() {
    return (
      <View style={styles.myScreen}>
        <Text style={styles.copiedValueArea}>{this.state.copiedValue}</Text>
        <TouchableOpacity style={styles.fetchButton} onPress={this.fetchData}><Text>Fetch
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fetchButton: {
    backgroundColor: 'gray',
    height: 30,
    width: 100,
    padding: 5,
    paddingLeft: 30
  },
  copiedValueArea: {
    color: 'blue'
  }
})
import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps() {
        console.log('Child  : Get derived  state from props called....')
        return null;
    }
    
    componentDidMount(){
        console.log('Child : Component Did mount');
    }
    
    shouldComponentUpdate() {
        console.log('Child : should component update');
        return true;
    }
    
    getSnapshotBeforeUpdate(){
        console.log('Child : get snapshot before update');
        return null;
    }

    componentDidUpdate(){
        console.log('Child : Component did update');
    }
    
      componentWillUnmount(){
        console.log('Child : Component will unmount');
      }

    render() {
     return (
      <View>
        <Text style={styles.counterValue}>{this.props.counter}</Text>
      </View>
    );
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
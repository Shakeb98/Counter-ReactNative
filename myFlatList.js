import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class myFlatList extends Component {
    state = { dataSource: [] }
    componentDidMount() {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    padding={40}
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View style={styles.oneLine}>
                            <Text style={styles.twoLine}>{item.id}</Text>
                            <Text style={styles.threeLine}>{item.first_name}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    oneLine:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    twoLine:{
        height:50
    },
    horizontalLine:{
        height:1,
        backgroundColor:'blue'
    }
})


export default myFlatList
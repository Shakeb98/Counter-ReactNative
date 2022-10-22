import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const Data = [
    {
        categoryId: 'fruits',
        title: 'mango'
    },
    {
        categoryId: 'fruits',
        title: 'apple'
    },
    {
        categoryId: 'fruits',
        title: 'coconut'
    },
    {
        categoryId: 'fruits',
        title: 'orange'
    },
    {
        categoryId: 'fruits',
        title: 'pomegranade',
    },
    {
        categoryId: 'fruits',
        title: 'mausmi'
    },
    {
        categoryId: 'flowers',
        title: 'rose',
    },
    {
        categoryId: 'flowers',
        title: 'lili'
    },
    {
        categoryId: 'flowers',
        title: 'jasmine'
    },
    {
        categoryId: 'flowers',
        title: 'hibiscus',
    },
    {
        categoryId: 'flowers',
        title: 'daffodils',
    },
    {
        categoryId: 'flowers',
        title: 'seasonal flowers',
    },
    {
        categoryId: 'flowers',
        title: 'sregional fruits',
    },
    {
        categoryId: 'vegetables',
        title: 'potato',
    },
    {
        categoryId: 'vegetables',
        title: 'tomato',
    },
    {
        categoryId: 'vegetables',
        title: 'guard',
    },
    {
        categoryId: 'vegetables',
        title: 'brinjal',
    },
];

const result = Data.reduce((accum, current) => {
    let finder = accum.find(x => x.categoryId === current.categoryId);
    if (!finder) {
        finder = { categoryId: current.categoryId, data: [] }
        accum.push(finder);
    }
    finder.data.push(current.title);
    return accum;
}, []);

class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <SectionList
                    sections={result}
                    renderItem={({ item }) =>
                        <Text style={styles.headerData}>-{item}</Text>
                    }
                    renderSectionHeader={({ section: { categoryId } }) => (
                        <Text style={styles.header}>{categoryId}</Text>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 55,
        fontWeight: 'bold',
        backgroundColor:'greenyellow'
    },
    headerData: {
        fontSize: 30,
        color: 'red',
        backgroundColor: 'darkgray'
    }
});

export default App;
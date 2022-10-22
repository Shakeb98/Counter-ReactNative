import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
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
    ]

const result = DATA.reduce((accum, current) => {
    let finder = accum.find(x => x.categoryId === current.categoryId);
    if (!finder) {
        finder = { categoryId: current.categoryId, title: [] }
        accum.push(finder);
    }
    finder.title.push(current.title);
    return accum;
}, []);

class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <SectionList
                    sections={result}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    renderSectionHeader={({ section }) => (
                        <Text>{section.categoryId}</Text>
                    )}
                />
            </SafeAreaView>
        );
    }
}

export default App;
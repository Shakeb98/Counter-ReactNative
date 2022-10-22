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
];

// const result = DATA.reduce((accum, current) => {
//     let finder = accum.find(x => x.categoryId === current.categoryId);
//     if (!finder) {
//         finder = { categoryId: current.categoryId, title: [] }
//         accum.push(finder);
//     }
//     finder.title.push(current.title);
//     return accum;
// }, []);

const sectionListData = [];

Data.forEach((item) => {
    //console.log(item)
    if (sectionListData.length > 0) {
        let dataMatched = false;
        sectionListData.forEach((objectData) => {
            if (objectData.categoryId === item.categoryId) {
                objectData.data.push(item.title)
                dataMatched = true;
            }
        });
        if (dataMatched === false) {
            let newData = {
                categoryId: item.categoryId,
                data: [item.title]
            };
            sectionListData.push(newData)
        }
    }
    else {
        let newData = {
            categoryId: item.categoryId,
            data: [item.title]
        };
        sectionListData.push(newData)
    }
});

const Item = ({ categoryId }) => (
    <View style={styles.item}>
        <Text style={styles.categoryId}>{categoryId}</Text>
    </View>
);

class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <SectionList
                    sections={sectionListData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item categoryId={item} />}
                    renderSectionHeader={({ section: { categoryId } }) => (
                        <Text style={styles.header}>{categoryId}</Text>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#d1cfff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff9"
    },
    categoryId: {
        fontSize: 24,
        color: '#0000de',
    }
});

export default App;
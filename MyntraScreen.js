import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'

export class MyntraScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.fullScreen}>
                <View>
                    <View style={styles.oneLine}>
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>195 items</Text>
                        </View>
                        <View style={styles.sortView}>
                            <TouchableOpacity style={styles.sortIcon}>
                                <Image resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/images(3).png')} style={styles.sortLogo} />
                                <Text style={styles.text}>SORT</Text>
                            </TouchableOpacity>
                            <View style={styles.straightLine}>
                            </View>
                            <TouchableOpacity style={styles.filterIcon}>
                                <Image resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/images(2).png')} style={styles.sortLogo} />
                                <Text>FILTER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondStraightLine}></View>
                    <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Polo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Men </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Tshirts Girl</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView style={styles.verticalScrollVieew}>
                        <View style={styles.imageRowOne}>
                            <View>
                                <Image resizeMode={'contain'} style={styles.oneImage} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/Tommy-Hilfiger-Round-Neck-T-Shirt-for-Men.jpeg')} />
                                <View style={styles.new}>
                                    <Text style={styles.textNew}>New</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image resizeMethod={'contain'} style={styles.heartIcon} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/pngtree-love-interface-line-vector-single-icon-png-image_5184394.jpeg')} />
                                </TouchableOpacity>

                                <View style={styles.textRowOne}>
                                    <Text style={styles.textOne}>Tommy Hilfiger</Text>
                                    <Text>Men's Morison stripe Polo</Text>
                                    <Text>LineLight Combo</Text>
                                    <Text style={styles.textTwo}>USD 23</Text>
                                </View>
                            </View>
                            <View>
                                <Image resizeMode={'contain'} style={styles.twoImage} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/Tommy-Hilfiger-Round-Neck-T-Shirt-for-Men.jpeg')} />
                                <View style={styles.new}>
                                    <Text style={styles.textNew}>New</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image resizeMethod={'contain'} style={styles.heartIcon} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/pngtree-love-interface-line-vector-single-icon-png-image_5184394.jpeg')} />
                                </TouchableOpacity>
                                <View style={styles.textRowOne}>
                                    <Text style={styles.textOne}>Tommy Hilfiger</Text>
                                    <Text>Men's Morison stripe Polo</Text>
                                    <Text>LineLight Combo</Text>
                                    <Text style={styles.textTwo}>USD 35</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.imageRowTwo}>
                            <View>
                                <Image resizeMode={'contain'} style={styles.oneImage} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/Tommy-Hilfiger-Round-Neck-T-Shirt-for-Men.jpeg')} />
                                <View style={styles.new}>
                                    <Text style={styles.textNew}>New</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image resizeMethod={'contain'} style={styles.heartIcon} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/pngtree-love-interface-line-vector-single-icon-png-image_5184394.jpeg')} />
                                </TouchableOpacity>
                                <View style={styles.textRowOne}>
                                    <Text style={styles.textOne}>Tommy Hilfiger</Text>
                                    <Text>Men's Morison stripe Polo</Text>
                                    <Text>LineLight Combo</Text>
                                    <Text style={styles.textTwo}>USD 23</Text>
                                </View>
                            </View>
                            <View>
                                <Image resizeMode={'contain'} style={styles.twoImage} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/Tommy-Hilfiger-Round-Neck-T-Shirt-for-Men.jpeg')} />
                                <View style={styles.new}>
                                    <Text style={styles.textNew}>New</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image resizeMethod={'contain'} style={styles.heartIcon} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/pngtree-love-interface-line-vector-single-icon-png-image_5184394.jpeg')} />
                                </TouchableOpacity>
                                <View style={styles.textRowOne}>
                                    <Text style={styles.textOne}>Tommy Hilfiger</Text>
                                    <Text>Men's Morison stripe Polo</Text>
                                    <Text>LineLight Combo</Text>
                                    <Text style={styles.textTwo}>USD 23</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    sortView: {
        flexDirection: 'row'
    },
    oneLine: {
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    sortLogo: {
        width: 30,
        height: 17
    },
    sortView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 160
    },
    fullScreen: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    straightLine: {
        backgroundColor: 'black',
        width: 1,
        height: '100%'
    },
    sortIcon: {
        flexDirection: 'row',
        width: 70
    },
    filterIcon: {
        flexDirection: 'row',
    },
    secondStraightLine: {
        borderBottomColor: 'balck',
        borderBottomWidth: 1,
        bottom: 45
    },
    buttons: {
        flexDirection: 'row',
        backgroundColor: 'gainsboro',
        width: 90,
        borderRadius: 10,
        height: 35,
        marginLeft: 10,
        padding: 9,
        textAlign: 'center'
    },
    horizontalScroll: {
        bottom: 20,
        height: 40,
    },
    oneImage: {
        height: 320,
        width: 180
    },
    imageRowOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 23
    },
    twoImage: {
        height: 320,
        width: 180
    },
    textRowOne: {
        bottom: 20
    },
    imageRowTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 50
    },
    textOne: {
        fontWeight: 'bold'
    },
    textTwo: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemText: {
        color: 'gray'
    },
    new: {
        backgroundColor: 'forestgreen',
        width: 40,
        position: 'absolute',
        top: 27,
        padding: 2,
        alignItems: 'center'
    },
    heartIcon: {
        height: 25,
        width: 25,
        position: 'absolute',
        right: 6,
        bottom: 265,
        borderRadius: 15
    },
    textNew: {
        color: 'white'
    },
})

export default MyntraScreen
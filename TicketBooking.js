import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class TicketBooking extends Component {
    render() {
        return (
            <SafeAreaView style={styles.fullScreen}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image resizeMode={'contain'} style={styles.backButton} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/865-8655014_back-arrow-button-comments-number-one-in-a.png')} />
                    </TouchableOpacity>
                    <Text>Product Details</Text>
                    <TouchableOpacity>
                        <Image resizeMode={'contain'} style={styles.bookmarkButton} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/download.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    <Image resizeMode={'contain'} style={styles.movieLogo} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/12931171_1079163228794337_8732305975871635522_n.webp')} />
                    <View style={styles.titleText}>
                        <Text style={styles.movieTitle}>The Hulk - Witch Hungers </Text>
                        <Text style={styles.part}>Part III</Text>
                    </View>
                    <View style={styles.movieType}>
                        <TouchableOpacity style={styles.movieTypeButton}>
                            <Text style={styles.movieTypeText}>Drama</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.movieTypeButton}>
                            <Text style={styles.movieTypeText}>Family</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.movieTypeButton}>
                            <Text style={styles.movieTypeText}>Fantasy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.details}>
                        <View style={styles.description}>
                            <Text style={styles.year}>
                                Year
                            </Text>
                            <Text style={styles.yearValue}>
                                1984
                            </Text>
                        </View>

                        <View style={styles.description}>
                            <Text style={styles.country}>
                                Country
                            </Text>
                            <Text style={styles.countryValue}>
                                India
                            </Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.length}>
                                Length
                            </Text>
                            <Text style={styles.lenghtValue}>
                                20 min
                            </Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.aboutText}>About Movie </Text>
                        <Text style={styles.paraText}>Harried fashion entrepreneur Jules gets a surprise boost from Ben, a 70-year-old widower who answers an ad seeking a senior intern.</Text>
                    </View>
                    <View style={styles.screenshotImages}>
                        <Text style={styles.screenshotText}>Screenshots  </Text>
                        <ScrollView horizontal={true} style={styles.imageDrag}>
                            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/12931171_1079163228794337_8732305975871635522_n.webp')} />
                            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/12974270_1079163305460996_5138028267115779306_n.webp')} />
                            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/12931171_1079163228794337_8732305975871635522_n.webp')} />
                        </ScrollView>
                    </View>
                </ScrollView>

                <View style={styles.ticketButton}>
                    <TouchableOpacity style={styles.buyTicketButton}>
                        <Text style={styles.buyTicketButtonText}>
                            BUY TICKET
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    fullScreen: {
        padding: 20
    },
    backButton: {
        height: 15,
        width: 15,
    },
    bookmarkButton: {
        height: 15,
        width: 15
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        height: 30
    },
    movieLogo: {
        top: 20,
        alignSelf: 'center',
        width: 300,
        height: 350,
        marginBottom: 50,
        border: 0,
        borderRadius:20,
        resizeMode: 'stretch',
    },
    titleText: {
        marginLeft: 10,
    },
    movieTitle: {
        textAlign: 'center'
    },
    part: {
        top:6,
        textAlign: 'center',
    },
    movieType: {
        marginLeft: 42,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        padding: 50,
        bottom: 30
    },
    movieTypeButton: {
        backgroundColor: 'rgb(60,106,246)',
        padding: 9,
        borderRadius: 20,
    },
    movieTypeText: {
        color: 'white',
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        width: '13%',
        marginLeft: 55
    },
    year: {
        textAlign: 'center',
        fontSize: 10,
        color: 'gray'
    },
    yearValue: {
        textAlign: 'center',
        fontSize: 12
    },
    country: {
        textAlign: 'center',
        fontSize: 10,
        color: 'gray'
    },
    countryValue: {
        textAlign: 'center',
        fontSize: 12
    },
    length: {
        textAlign: 'center',
        fontSize: 10,
        color: 'gray'
    },
    lenghtValue: {
        textAlign: 'center',
        fontSize: 12
    },
    buyTicketButton: {
        alignSelf: 'center',
        backgroundColor: 'rgb(60,106,246)',
        height: 50,
        width: 350,
        overflow: 'hidden',
        top:20
    },
    buyTicketButtonText: {
        color: 'white',
        padding: 13,
        marginLeft: 120,
        fontSize: 20
    },
    content: {
        top: 25,
        marginLeft: 15
    },
    imageHorizontal: {
        marginTop: 20,
        height: 200,
        width: 150,
        marginRight: 20,
        borderWidth:1,
        borderRadius:10,
        resizeMode: 'stretch',
        borderColor: 'black'
    },
    screenshotText: {
        top: 65
    },
    paraText: {
        top: 20,
        color: 'gray'
    },
    line: {
        bottom: 20,
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 1
    },
    scrollView: {
        backgroundColor: 'rgb(248,249,252)'
    },
    screenshotImages: {
        marginLeft: 17
    },
    imageDrag: {
        top: 75
    },
    ticketButton:{
        width:'100%',
        height:'20%',
        backgroundColor:'rgb(248,249,252)',
        bottom: 60,
    }
})
export default TicketBooking
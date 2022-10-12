import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class LoginPage extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Image style={styles.linkedInLogo} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot.png')} />
                </View>

                <View>
                    <Text style={styles.signIn}>Sign in</Text>
                    <Text style={styles.or}>or</Text>
                    <TouchableOpacity style={styles.joinLinkedIn}>
                        <Text style={styles.joinLinkedInText}>
                            Join Linkedin
                        </Text>
                    </TouchableOpacity>
                    <TextInput style={styles.EmailInput} placeholder="Email or Phone" />
                    <TextInput style={styles.PasswordInput} secureTextEntry={true}  placeholder="Password" />

                    <TouchableOpacity onclick="">
                        <Image style={styles.eyeLogo} resizeMode={'contain'} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/action-hide-password.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>
                                Forgot password?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.SignIn}>
                            <Text style={styles.SignInText}>
                                Sign in
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style = {styles.orSection}>
                        <View style={styles.straightLineBefore}></View>
                        <Text style = {styles.orLine}>or</Text>
                        <View style= {styles.straightLineAfter}></View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.appleSignIn}>
                        <Image resizeMode={'contain'} style={styles.appleLogo} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/il_570xN.2930089966_oqvj.webp')} /> 
                        <Text style={styles.appleSignInText}>
                            Sign in with Apple
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.googleSignIn}>
                        <Image resizeMode={'contain'}style={styles.googleLogo} source={require('/Users/shakeebkhan/Desktop/AwesomeProject/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png')}  />
                        <Text style={styles.googleSignInText}>
                            Sign in with Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    linkedInLogo: {
        aspectRatio: 1.5,
        resizeMode: 'center'
    },
    signIn: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 30,
        bottom: 40
    },
    or: {
        marginLeft: 23,
        bottom: 40
    },
    joinLinkedIn: {
        marginLeft: 40,
        bottom: 57
    },
    joinLinkedInText: {
        color: 'royalblue',
        fontWeight: 'bold'
    },
    EmailInput: {
        marginLeft: 20,
        bottom: 25,
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        padding: 10,
        width:340
    },
    PasswordInput: {
        marginLeft: 20,
        bottom: 20,
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        padding: 10,
        width:340
    },
    forgotPassword: {
        marginLeft: 25,
    },
    forgotPasswordText: {
        color: 'royalblue',
        fontWeight: 'bold',
        bottom: 8
    },
    SignIn: {
        marginTop: 10,
        marginLeft: 25,
        backgroundColor: 'royalblue',
        borderRadius: 60,
        width:340
    },
    SignInText: {
        color: 'white',
        padding: 10,
        fontSize: 25,
        marginLeft: 130
    },
    orText: {
        marginLeft: 70
    },
    appleSignIn: {
        marginLeft: 25,
        top: 60,
        borderWidth: 2,
        borderRadius: 50,
        height: 40,
        overFlow:'hidden',
        width:340
    },
    appleSignInText: {
        marginLeft: 100,
        fontWeight: 'bold',
        marginTop: 6,
        fontSize: 20,
        bottom:35
    },
    googleSignIn: {
        marginLeft: 25,
        top: 70,
        borderWidth: 2,
        borderRadius: 50,
        height: 40,
        width:340
    },
    googleSignInText: {
        marginLeft: 100,
        fontWeight: 'bold',
        marginTop:7, 
        fontSize: 20,
        bottom:24
    },
    appleLogo:{
        marginLeft:60,
        height:35,
        width:40
    },
    googleLogo:{
        height:22,
        width:22,
        marginLeft:68,
        top:6
    },
    straightLineBefore:{
        marginLeft:30,
        width:155,
        top:30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    orLine:{
        marginLeft:190,
        top:20
    },
    straightLineAfter:{
        marginLeft:210,
        width:155,
        top:12,
        borderBottomColor:'grey',
        borderBottomWidth:1
    },
    orSection:{
        top:10
    },
    eyeLogo:{
        width:25,
        height:25,
        bottom:52,
        marginLeft:315
    }
})
export default LoginPage
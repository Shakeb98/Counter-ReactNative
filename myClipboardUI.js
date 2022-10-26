import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setButton:{
        backgroundColor:'gainsboro',
        height:30,
        width:190,
        padding:4,
        alignItems:'center',
        marginBottom:10
    },
    inputText:{
        height: 40,
        width: 190,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom:10
    },
    pressButton:{
        width:100,
        height:20,
        backgroundColor:'yellow',
        paddingLeft:30
    }
})

export default styles
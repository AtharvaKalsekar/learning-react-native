import React from 'react'
import { StyleSheet } from 'react-native';

const InputHeaderSS = StyleSheet.create({
    container : {
        flexDirection : "row",
        width : "100%",
        padding : 10,
        justifyContent : "space-between",
        alignItems : "center"
    },
    inputElement : {
        borderBottomWidth : 1,
        borderBottomColor : 'black',
        flex: 3,
        padding: 3,
        margin: 2
    },
    btnAdd : {
        width: "100%",
        padding: 3,
        flex : 1,
        margin: 2
    }
});
export default InputHeaderSS
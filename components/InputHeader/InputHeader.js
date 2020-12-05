import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import InputHeaderSS from './InputHeaderSS';

class InputHeader extends React.Component{
    render(){
        return(
            <View style={InputHeaderSS.container}>
                <TextInput placeholder="Input some text" style={InputHeaderSS.inputElement}/>
                <View style={InputHeaderSS.btnAdd}>
                    <Button title="add"/>
                </View>
            </View>
        );
    }
}

export default InputHeader
//this imports react and the component folder into the 
import React, {Component, component } from 'react';
//importing View Text and Stylesheet into the EmojiDict.js file for using as components
import {View, Text ,StyleSheet} from 'react-native';

class EmojiDict extends Component{
    state = {
        'john' : 'james',
        'david' : 'jacob',
        'adriana' : 'chechik'
    };
    render() {
        return(
            <View style={styles.container}>
            <Text>{this.state['john']}</Text>
            <Text>{this.state['david']}</Text>
            <Text>{this.state['adriana']}</Text>

            </View>
        );
    }
}

const styles =StyleSheet.create({
    container : {
        flex :1,
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default EmojiDict;

import { StatusBar } from 'react-native';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

const Ex2 =() => {
    return (
        < View style={{flex:1, justifyContent:'center'}}>
        <Button title="Button 1" onPress={() => alert ("hello!")} />
        <TouchableOpacity
         onPress={() => alert("hello 2!")}
        style={{
        backgroundColor: "blue",
         padding: 10,
          alignItems:"center",
        marginTop: 10,
        }}
        >
        <Text style={{color:"white", fontSize: 18 }}>Button 2</Text>
        </TouchableOpacity>
        </View>
         
        );
}
export default Ex2;
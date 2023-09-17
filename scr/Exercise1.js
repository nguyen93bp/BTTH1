import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const  Ex1 =() => {
  return (
    <View style={MyStyle.ViewStyle}>
      <Text Style={MyStyle.TextStyle}>Hello World</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

export default Ex1;

<View style={
  {
    width: 300,
    heigt: 300,
    
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
}
}>
  <Text style= {{ color:'#fff'}}> Hello world</Text>
  </View>

var MyStyle =   StyleSheet.create(
  {
  ViewStyle: {
    width: 150,
    heigt: 200,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  TextStyle:
  {
    color:'black'
  }
}
)

 const styles = StyleSheet.create({
   container: {
     flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: 'center',
   },
 });

import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class _Button extends Component {
  render() {
    return (
      <View style={{marginTop:150,alignContent:"center",alignItems:"center",marginLeft:100,marginRight:100}}>
        <Button
            title="OnPress"
            onPress={()=>alert("Welcome to react native")}
        />  
      </View>
    );
  }
}

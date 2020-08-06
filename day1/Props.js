import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Props extends Component {

  render() {
    return (
      <View style={{justifyContent:"center",alignItems: "center",marginTop: 250}}>
        <View style={{backgroundColor:"purple",height:200,width:200}}>
            <Text style={{color:"white"}}>This is just a example</Text>
        </View>
      </View>
    );
  }
}

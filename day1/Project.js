import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet } from 'react-native';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:"red",name:"red"
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View>
              <TextInput 
                style={styles.input}
                placeholder="Enter the color Name"
                placeholderTextColor="black"
                onChangeText={value=> this.setState({name:value})}
                />
          </View>
          <View>
              <Button
              title="Change the color"
              onPress={()=>this.setState({color:this.state.name})}/>
          </View>
            <Text style={styles.name}>The Color is {this.state.color}</Text>
            <View style={{height:150,backgroundColor:this.state.color,width:150}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop:150
    },
    input:{
        margin:20,
        borderColor:"black",
        borderWidth:1,
        height: 50,
        width: 200,
    },
    name:{
        marginTop:20,
        fontSize: 20,
        marginBottom:20
    },
})
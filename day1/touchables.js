import React, { Component } from 'react'
import { Text, View,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,StyleSheet } from 'react-native'

export default class Touchable extends Component {
  render() {
    return (
      <View style={{marginTop:100,alignItems:"center"}}>
        <Text> Touchable example using React Native </Text>

        <Text style={styles.title}>TouchableHighlight</Text>
        <TouchableHighlight style={styles.touchables}
            underlayColor="black"
            onPress={()=>alert("Welcome to React Native")}>
            <Text style={styles.click}>Click</Text>
        </TouchableHighlight>
        
        <Text style={styles.title}>TouchableOpacity</Text>
        <TouchableOpacity style={styles.touchables}
            underlayColor="black"
            activeOpacity={0.5}
            onPress={()=>alert("Welcome to React Native")}>
            <Text style={styles.click}>Click</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>TouchableNativeFeedback</Text>
        
        <View style={styles.touchables}>
        <TouchableNativeFeedback
          onLongPress={()=>alert("Hello")}>
            <Text style={styles.click}>Click</Text>
        </TouchableNativeFeedback>
        </View>
        
        <Text style={styles.title}>TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback
            underlayColor="red"
            onPress={()=>alert("Welcome to React Native")}>
            <View style={styles.touchables}>
                <Text style={styles.click}>Click</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    title:{
        marginTop:50,
        marginBottom:15,
        fontSize: 20
    },
    touchables:{
        borderColor:"white",
        height:50,
        width:150,
        backgroundColor:"red",
        borderWidth: 1
    },
    click:{
        color:"white",
        marginLeft:45,
        marginTop: 8,
        fontSize:25
    }
})
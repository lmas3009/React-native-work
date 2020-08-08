import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet} from 'react-native';
import img from '../assets/splash.png'

export default function Backgroundimg(){

    return (
        <View style={styles.container}>
        <ImageBackground source={{uri:'https://image.shutterstock.com/image-photo/charminar-hyderabad-india-background-copy-260nw-1046605465.jpg'}} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      image: {
        resizeMode: "cover",
        justifyContent: "center",
      },
      text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold",
        alignItems:"center"
      }
})
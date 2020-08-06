import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Height_width extends React.Component{
    render(){
       return(
        <View >
            <View
                style={styles.h1}
            />
            <View
                style={styles.h2}
            />
            <View
                style={styles.h3}
            />
       </View>
     );
   }
}
   
   const styles = StyleSheet.create({
     h1:{
         height:100,
         width:100,
         backgroundColor:"lightblue"
     },
     h2:{
         height:200,
         width:200,
         backgroundColor:"skyblue"
     },
     h3:{
         height:300,
         width:300,
         backgroundColor:"blue"
     }
   });
   
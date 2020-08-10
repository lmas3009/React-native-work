import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"flex-end"
    },
    box1:{
        height:50,
        width:50,
        backgroundColor:"blue"
    },
    box2:{
        height:50,
        width:50,
        backgroundColor:"lightblue"
    },
    box3:{
        height:50,
        width:50,
        backgroundColor:"skyblue"
    }
})

/*container:{
    flex:1,
    //justifyContent:"space-around",
    //justifyContent:"space-between",
    justifyContent:"center",
    //alignItems:"flex-end",
    alignItems:"center"
},*/
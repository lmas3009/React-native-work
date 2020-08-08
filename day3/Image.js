import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Splash from '../assets/splash.png'

export default class _Image extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.name}>Image</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri:'https://image.shutterstock.com/image-photo/charminar-hyderabad-india-background-copy-260nw-1046605465.jpg'
                    }}
                    blurRadius={0.5}
                />
                <Text style={styles.name}>Assets Image</Text>
                <Image
                    style={styles.image}
                    source={Splash}
                    blurRadius={0.5}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        alignItems: "center"
    },
    name:{
        fontSize:20,
        fontWeight:"bold"
    },
    image:{
        height: 150,
        width: 150
    }
})
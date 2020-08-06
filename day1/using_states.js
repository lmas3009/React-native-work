import React from 'react'
import {View,Text} from 'react-native'

export default class States extends React.Component{
    state={name:"helo",color:"green"}
    render(){
        return(
            <View>
                <Text> {this.state.name}</Text>
                <Text style={{color:this.state.color}}>Example to change the color</Text>
            </View>
        )
    }
}
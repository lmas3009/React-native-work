import React from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'

const Data=
[
    {
        name: "Admin",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        name: "Root",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        name: "Lorem",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        name: "Ipsum",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        name: "admin123",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
]

export default class _Flatlist extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.name}>Flatlist</Text>
                <View style={styles.divider}/>
                <FlatList
                data={Data}
                renderItem={({item}) => 
                <View style= {styles.list}>
                    <Text style={styles.name1}>{item.name}</Text>
                    <View style={styles.divider}/>
                    <Text style={styles.info}>{item.info}</Text>
                </View>    
            }
                />
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        marginTop: 30
    },
    name:{
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10
    },
    divider:{
        height: 1,
        backgroundColor:'lightgrey',
        marginBottom: 10,
        marginTop: 5
    },
    list:{
        height: 150,
        marginBottom: 10,
        borderWidth:1,
        borderColor:"black",
        margin: 10,
        justifyContent:"center"
    },
    name1:{
        fontWeight:"bold",
        fontSize: 15,
        marginLeft: 15
    },
    info:{
        marginLeft: 15,
        marginRight: 15
    }
})
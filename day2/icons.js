import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Icons extends React.Component{
    render(){
        return(
            <View style={styles.conatiner}>
                <View style={styles.profile}>
                    <Icon name="user" size={25} color="white"/>
                    <Text style={styles.title}>Profile</Text>
                </View>
                
                <View style={styles.setting}>
                    <Icon name="cog" size={25} color="white"/>
                    <Text style={styles.title}>Settings</Text>
                </View>
                
                <View style={styles.login}>
                    <Text style={styles.title}>Login</Text>
                    <Icon name="arrow-circle-right" size={25} color="white"/>
                </View>
                
                <View style={styles.menu1}>
                    <Icon name="bars" size={25} color="white"/>
                    <Text style={styles.title}>Menu</Text>
                </View>

                <View style={styles.authlogin}>
                <Icon.Button
                    size = {25}
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={() => alert('Login with Facebook')}>
                    Login with Facebook
                </Icon.Button>
                </View>
                
                <View style={styles.authlogin}>
                <Icon.Button
                    size = {25}
                    name="google"
                    backgroundColor="#176bef"
                    onPress={() => alert('Login with Google')}>
                    Login with Google
                </Icon.Button>
                </View>
                <View style={styles.authlogin}>
                <Icon.Button
                    size = {25}
                    name="github"
                    backgroundColor="#211f1f"
                    onPress={() => alert('Login with Github')}>
                    Login with Github
                </Icon.Button>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    conatiner:{
        alignItems:"center"
    },
    profile:{
        flexDirection:"row",
        width:150,
        justifyContent:"space-around",
        backgroundColor:"purple",
        borderRadius:20,
        height: 50,
        alignContent:"center",
        alignItems:"center",
        marginTop: 100
    },
    setting:{
        flexDirection:"row",
        width:150,
        justifyContent:"space-around",
        backgroundColor:"orange",
        borderRadius:20,
        height: 50,
        alignContent:"center",
        alignItems:"center",
        marginTop: 30
    },
    login:{
        flexDirection:"row",
        width: 200,
        justifyContent:"space-around",
        backgroundColor:"red",
        borderRadius:20,
        height: 50,
        alignContent:"center",
        alignItems:"center",
        marginTop: 30
    },
    menu1:{
        flexDirection:"row",
        width: 120,
        justifyContent:"space-around",
        backgroundColor:"blue",
        borderRadius:20,
        height: 50,
        alignContent:"center",
        alignItems:"center",
        marginTop: 30
    },
    authlogin:{
        marginTop: 30
    },
    title:{
        color:"white",
        fontSize: 20
    },
})
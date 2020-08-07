import React from 'react'
import {View,Text,TextInput,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"name",password:"password",name1:"name",password1:"password"
        };
      }
      F1=()=>
      {this.setState({
        name1:this.state.name,
        password1:this.state.password
    })
    alert("username is "+this.state.name1+"\n"+"Password is "+this.state.password1)}

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.username}>
                    <Icon name="user" style={styles.icons}  size={25}/>
                    <TextInput
                        placeholder="Enter the name"
                        onChangeText={(text)=>this.setState({name:text})}
                        placeholderTextColor="black"
                        style={styles.input}
                    />
                </View>
                
                <View style={styles.password}>
                    <Icon name="lock" style={styles.icons}   size={25}/>
                    <TextInput
                        placeholder="Enter the Password"
                        onChangeText={(text)=>this.setState({password:text})}
                        placeholderTextColor="black"
                        style={styles.input}
                    />
                </View>

                <View style={styles.btn}>
                <TouchableWithoutFeedback
                    underlayColor="red"
                    onPress={this.F1}>
                <View style={styles.login}>
                    <Text style={styles.title}>Login</Text>
                    <Icon name="arrow-circle-right" size={25} color="white"/>
                </View>
                </TouchableWithoutFeedback>
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginTop: 250
    },
    username:{
        flexDirection:"row",
        margin:20,
        borderWidth:1,
        borderColor:"black",
        width: 250,
        height: 50,
        alignItems:"center",
        borderRadius: 20
    },
    password:{
        flexDirection:"row",
        margin:20,
        borderWidth:1,
        borderColor:"black",
        width: 250,
        height: 50,
        alignItems:"center",
        borderRadius: 20
    },
    input:{
        marginLeft: 20
    },
    icons:{
        marginLeft: 10
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
    title:{
        color:"white",
        fontSize: 20
    }
})
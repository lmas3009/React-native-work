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



Using Social Icons:

import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {SocialIcon} from 'react-native-elements'
import {} from 'react-native-vector-icons'

export default class App extends React.Component {

  constructor(params){
    super(params);
    this.state={
    validate: false,
    validate1: false,
    validate2: false
  }
  }

render(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Social Icons
      </Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="facebook"
          light
        />
        <Text>Facebook</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="google"
          raised={false}
        />
        <Text>Google</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="twitter"
        />
        <Text>Twitter</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="github"
          onPress={
            <SocialIcon 
            loading={true}/>
          }
        />
        <Text>Github</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="pinterest"
        />
        <Text>Pinterest</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="linkedin"
        />
        <Text>Linkedin</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <SocialIcon 
          type="gitlab"
        />
        <Text>Git Lab</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          {!this.state.validate ? <SocialIcon 
          type="twitter"
          title="Login Using Twitter"
          button
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate:true}),
            alert("Login Using Twitter")
          }
          }
        />: <SocialIcon 
          type="twitter"
          title="Login Using Twitter"
          button
          loading
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate:false}),
            alert("Cancel the authentication")
          }
          }
            />}
            {!this.state.validate1 ? <SocialIcon 
          type="google"
          title="Login Using Google"
          button
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate1:true}),
            alert("Login Using Google")
          }
          }
        />: <SocialIcon 
          type="google"
          title="Login Using Google"
          button
          loading
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate1:false}),
            alert("Cancel the authentication")
          }
          }
            />}
            {!this.state.validate2 ? <SocialIcon 
          type="facebook"
          title="Login Using Facebook"
          button
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate2:true}),
            alert("Login Using Facebook")
          }
          }
        />: <SocialIcon 
          type="facebook"
          title="Login Using Facebook"
          button
          loading
          style={{width: 250}}
          onPress={()=>{
            this.setState({validate2:false}),
            alert("Cancel the authentication")
          }
          }
            />}
        </View>
      </View>
       
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

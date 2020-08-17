import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Child1 from '../child_to_child/child1'
import Child2 from '../child_to_child/child2'

export default class Parent extends Component {

    state = {
        val_key:''
    }

    parentfun=(data)=>{
        this.setState({
            val_key:data
        })
    }

  render() {
    return (
        <div>
            <Child1 child1parent={this.parentfun.bind(this)}/>
            <Child2 parentfunction={this.state.val_key}/>
        </div>
    )
  }
}
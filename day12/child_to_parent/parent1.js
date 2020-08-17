import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Child1 from './child1'

export default class Parent1 extends Component {


    parentfun=(data)=>{
        alert(data)
    }

  render() {
    return (
      <div>
        <Child1 parentfunction ={this.parentfun.bind(this)} />
      </div>
    )
  }
}
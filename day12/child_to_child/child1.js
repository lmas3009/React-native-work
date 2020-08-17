import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Child1 extends Component {


    child1=(e)=>{
        e.preventDefault()
        this.props.child1parent("hello weolcome to new world from child1")
    }


  render() {
    return (
        <div>
            <button onClick={this.child1.bind(this)}>click</button>
        </div>
    )
  }
}
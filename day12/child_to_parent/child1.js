import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Child1 extends Component {

    childfunction=(e)=>{
        e.preventDefault()
        this.props.parentfunction("Hello welcome to new World")
    }

  render() {
    return (
      <div>
        <button onClick={this.childfunction.bind(this)}>Click</button>
      </div>
    )
  }
}
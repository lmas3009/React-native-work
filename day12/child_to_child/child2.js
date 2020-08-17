import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Child2 extends Component {
  render() {
    return (
        <div>
            <h2>From child2</h2>
            <h2>{this.props.parentfunction}</h2>
        </div>
    )
  }
}
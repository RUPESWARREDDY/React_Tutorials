import React, { Component } from 'react'
import HOC from './HOC'

export class HocCounter extends Component {
  render() {
    let {count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>click{count}times</button>
      </div>
    )
  }
}

export default HOC(HocCounter)

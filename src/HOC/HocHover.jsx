import React, { Component } from 'react'
import HOC from './HOC'
export class HocHover extends Component {
  render() {
    let{count,increment}=this.props
    return (
      <div>
        <h1 onHover={increment}>Click {count} times</h1>
      </div>
    )
  }
}

export default HOC(HocHover) 

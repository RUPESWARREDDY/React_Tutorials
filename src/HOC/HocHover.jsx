import React, { Component } from 'react'

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
HOC(HocHover)
export default HocHover 

import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    const{count1,increment1}=this.props
    return (
      <div>
        counter1
        <button onMouseOver={increment1}>hover{count1}times</button>
      </div>
    )
  }
}

export default HoverCounter

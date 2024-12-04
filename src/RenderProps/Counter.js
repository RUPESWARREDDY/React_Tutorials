import React, { Component } from 'react'

class Counter1 extends Component {
  render() {
    const{count1,increment1}=this.props
    console.log(count1,'count')
    return (
      <div>
        <h1>Render props</h1>
        <button onClick={increment1}>clicked{count1}times</button>
      </div>
    )
  }
}

export default Counter1

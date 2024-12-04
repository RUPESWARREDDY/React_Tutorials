import React, { Component } from 'react'
class ClassClick extends Component {
    ClickHandler(){
        alert("clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>click</button>
      </div>
    )
  }
}

export default ClassClick

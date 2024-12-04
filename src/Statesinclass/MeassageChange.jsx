import React, { Component } from 'react'

class MeassageChange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message:"hello world"
      }
    }
    change(){
        this.setState({
            Message:"complete react"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={()=>this.change()}>click</button>
      </div>
    )
  }
}

export default MeassageChange

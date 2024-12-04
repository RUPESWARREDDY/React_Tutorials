import React, { Component } from 'react'

class FociusInput extends Component {
    constructor(props) {
      super(props)
    
      this.input=React.createRef()
    }
    focus=()=>{
        this.input.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <button onClick={this.focus}>click</button>
      </div>
    )
  }
}

export default FociusInput

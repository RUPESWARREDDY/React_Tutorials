import React, { Component } from 'react'
import ForwardingRef from './ForwardingRef'

class FowardingParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    clickHandler=()=>{
      this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <ForwardingRef ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default FowardingParent

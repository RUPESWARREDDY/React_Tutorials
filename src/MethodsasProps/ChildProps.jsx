import React, { Component } from 'react'

class ChildProps extends Component {
   
    
  render() {
    return (
      <div>
     <button onClick={this.props.greet}>click</button>
      </div>
    )
  }
}

export default ChildProps

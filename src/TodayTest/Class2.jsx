import React, { Component } from 'react'
class Class2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         v:false
      }
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({v:true})}}>click here</button>
          {this.state.v&&<h1>react devloper</h1>}
      </div>
    )
  }
}

export default Class2

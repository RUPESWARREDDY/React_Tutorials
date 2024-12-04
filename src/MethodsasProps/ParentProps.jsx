import React, { Component } from 'react'
import ChildProps from './ChildProps'

 class ParentProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"pavan"
      }
    //   this.greet=this.greet.bind(this)
    }
    greet=()=>{
        this.setState({message:"rupesh"})
       
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildProps greet={this.greet}/>
      </div>
    )
  }
}

export default ParentProps

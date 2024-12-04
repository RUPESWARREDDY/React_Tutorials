import React, { Component } from 'react'
class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
      this.change=this.change.bind(this)
    }
    // change(){
    //     this.setState({
    //         message:"bye"
    //     })
    // }
    change=()=>{
        this.setState({message:"good bye"})
    }
    
  render() {
    return (
      <div>
       <h1>{this.state.message}</h1> 
       {/* 1st way */}
        <button onClick={()=>this.change()}>Click</button> 
        {/* 2nd way */}
        <button onClick={this.change.bind(this)}>click</button>
        {/* 3rd way */}
        <button onClick={this.change}>click</button>
        {/* 4th way */}
        <button onClick={this.change}>click</button>
      </div>
    )
  }
}

export default EventBind

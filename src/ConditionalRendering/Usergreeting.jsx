import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status:true
      }
    }
    
  render() {
    //1st way

    // if(this.state.status)
    // {
    //     return <h1>hello eswar</h1>
    // }
    // else{
    //     return <h1>Hello rupesh</h1>
    // }

    // 2nd way
    // let msg;
    // if(this.state.status){
    //     msg=<h1>hello react</h1>
    // }
    // else{
    //     msg=<h1>Hello eswar start react</h1>
    // }
    return (
      <div>
        {/* {msg} */}
       {/* { this.state.status?<h1>hello eswar</h1>:<h1>hello rupesh how are u</h1>} */}
       {this.state.status&&<h1>hello eswar</h1>}
      </div>
    )
  }
}

export default Usergreeting

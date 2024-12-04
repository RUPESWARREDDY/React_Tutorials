import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment=()=>{
        this.setState(prevstate=> {return {count:prevstate.count+1}})
    }
  render() {
    return (
      <div>
        h1

        {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}

export default User

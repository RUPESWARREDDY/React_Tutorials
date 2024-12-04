import React, { Component } from 'react'
import {UserConsumer} from './UserContext1'
 class ComponentB extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
        {name=>{
            return <h1>hello {name}</h1>
        }}
      
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentB

import React, { Component } from 'react'
import PureComponent1 from './PureComponent'
import RegularComponent from './RegularComponent'

class ParentComponent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"eswar"
      }
    }
    componentDidMount(){
       setInterval( ()=>{this.setState({
            name:"eswar"
        })},2000)

    }
    
  render() {
    return (
      <div>
        ParentComponent1
        <PureComponent1 name={this.state.name}/>
        <RegularComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent1

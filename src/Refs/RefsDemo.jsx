import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.input=React.createRef()
      this.cdRef=null
      this.setcbRef=element=>{this.cdRef=element}
    }
    componentDidMount(){
        if(this.cbRef){
            this.cdRef.focus()
        }
        this.input.current.focus()
    }
    clickHandler=()=>{
        alert(this.input.current.value)
    }
    
  render() {
    return (
      <div>
      <input type="text" ref={this.input} />  
      <input type="text" ref={this.setcbRef} />
      <button type="submit" onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo

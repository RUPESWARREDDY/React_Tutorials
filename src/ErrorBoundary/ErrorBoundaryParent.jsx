import React, { Component } from 'react'

class ErrorBoundaryParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         haserror:false
      }
    }
    static getDerivedStateFromError(){
        return{
            haserror:true
        }
    }
    componentDidCatch(error,info)
    {
        console.log(error,info);
    }
    
  render() {
    if(this.state.haserror)
    {
        return <h1>something went wrong</h1>
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBoundaryParent

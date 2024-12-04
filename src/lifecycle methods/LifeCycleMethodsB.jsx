import React, { Component } from 'react'

 class LifeCycleMethodsB extends Component {
 constructor(props) {
      super(props)
    
      this.state = {
         name:"eswar"
      }
      console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
     console.log('lifecycleB getderived state from props');
      return null;
    }
    shouldComponentUpdate(){
        console.log('lifecycleB should component');
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('lifeCycleB getsnapshotbefore update');
        return null;
    }
    componentDidUpdate(){
        console.log('lifecycle B component did update');
    }
 
    componentDidMount(){
        console.log('lifecycleB component did mount');
    }
    
  render() {
    console.log("lifecycleB render");
    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleMethodsB

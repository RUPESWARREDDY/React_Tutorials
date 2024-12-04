import React, { Component } from 'react'
import LifeCycleMethodsB from './LifeCycleMethodsB'
class LifecycleMethods extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"eswar"
      }
      console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
     console.log('lifecycleA getderived state from props');
      return null;
    }
    shouldComponentUpdate(){
        console.log('lifecycleA should component');
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('lifeCycleA getsnapshotbefore update');
        return null;
    }
    componentDidUpdate(){
        console.log('lifecycle A component did update');
    }
 
    componentDidMount(){
        console.log('lifecycleA component did mount');
    }
    changeState=()=>{
        this.setState({name:'codevolution'})
    }
    
  render() {
    console.log("lifecycleA reNder");
    return (
      <div>
        <div>Lifecycle A {this.state.name}</div>
        <button onClick={this.changeState}>click</button>
        <LifeCycleMethodsB/>
      </div>
    )
  }
}

export default LifecycleMethods

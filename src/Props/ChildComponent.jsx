import React, { Component } from 'react'

class ChildComponent extends Component {
  
    
  render() {
    let {name,age}=this.props
    
    return (
      <div>
       <h1> {name}{age}</h1>
      </div>
    )
  }
}

export default ChildComponent
// import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//       {props.name}{props.age}
//     </div>
//   )
// }

// export default ChildComponent

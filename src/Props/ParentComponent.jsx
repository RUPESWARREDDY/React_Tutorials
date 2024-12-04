import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  render() {
    return (
      <div>
       <ChildComponent name="eswar" age="23"/>
      </div>
    )
  }
}

export default ParentComponent
// import React from 'react'

// function ParentComponent() {
//   return (
//     <div>
//       <ChildComponent name="eswar" age="23"/>
//       <ChildComponent name="sneha" age="33"/>
//       <ChildComponent name="rupesh" age="43"/>
//     </div>
//   )
// }

// export default ParentComponent


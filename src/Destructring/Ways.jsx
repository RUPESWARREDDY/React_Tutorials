// import React, { Component } from 'react'

// class Ways extends Component {
//   render() {
//     let{name,age}=this.props
//     return (
//       <div>
//         <h1>{this.props.name}{this.props.age}</h1>
//         <h2>{name} {age}</h2>

//       </div>
//     )
//   }
// }

// export default Ways
import React from 'react'

function Ways(props) {
    let{name,age}=props
  return (
    <div>
      <h1>{props.name}{props.age}</h1>
      <h2>{name}{age}</h2>
    </div>
  )
}

export default Ways


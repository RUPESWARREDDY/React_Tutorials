import React, { useContext } from 'react'
import { userContext } from '../../App'
function Componentf() {
    let context=useContext(userContext)
  return (
    <div>
      <h1>Componentf</h1>
      <h1>{context.Countstate}</h1>
      <button onClick={()=>{context.countDispatch('increment')}}>increment</button>
      <button onClick={()=>{context.countDispatch('decrement')}}>decrement</button>
      <button onClick={()=>{context.countDispatch('reset')}}>reset</button>
    </div>
  )
}

export default Componentf

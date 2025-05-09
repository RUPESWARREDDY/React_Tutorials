import React, { useContext } from 'react'
import { userContext } from '../../App'
function Componenta() {
    let context=useContext(userContext)
  return (
    <div>
        <h1>ComponentA</h1>
      <h1>{context.Countstate}</h1>
      <button onClick={()=>{context.countDispatch('increment')}}>increment</button>
      <button onClick={()=>{context.countDispatch('decrement')}}>decrement</button>
      <button onClick={()=>{context.countDispatch('reset')}}>reset</button>
    </div>
  )
}

export default Componenta

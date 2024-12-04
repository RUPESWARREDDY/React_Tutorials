import React, { useState } from 'react'

function CounterUseState() {
    let [count,setcount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}}>increment</button>
    </div>
  )
}

export default CounterUseState

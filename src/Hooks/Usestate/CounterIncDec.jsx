import React, { useState } from 'react'
let initialstate=0;
function CounterIncDec() {
    let [count,setcount]=useState(initialstate)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(prevstate=>prevstate+1)}}>increment</button>
      <button onClick={()=>{setcount(prevstate=>prevstate-1)}}>decrement</button>
      <button onClick={()=>{setcount(initialstate)}}>reset</button>
    </div>
  )
}

export default CounterIncDec

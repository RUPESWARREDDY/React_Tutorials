import React, { useEffect, useState } from 'react'

function UseEffectAfterRender() {
    let [count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(prev=>prev+1)}}>click</button>
    </div>
  )
}

export default UseEffectAfterRender

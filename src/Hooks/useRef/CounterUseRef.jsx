import React, { useEffect, useRef, useState } from 'react'

function CounterUseRef() {
    let a=0;
    let[count,setCount]=useState(a)
    let interval=useRef()
    useEffect(()=>{
        interval.current=setInterval(()=>{
            setCount(count=>count+1)
        },1000)
   return ()=>{
    clearInterval(interval)
   }
    },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{clearInterval(interval.current)}}>click</button>
    </div>
  )
}

export default CounterUseRef

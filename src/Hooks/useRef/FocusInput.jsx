import React, { useEffect, useRef } from 'react'

function FocusInput() {
    let a=useRef()
    let x=useRef()
    useEffect(()=>{
        console.log(x)
      return x.current=()=>{
        a.current.focus()
       }
     
    },[a])
  return (
    <div>
      <input type="text" ref={a} />
      <button onClick={x.current}>click</button>
    </div>
  )
}

export default FocusInput

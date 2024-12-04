import React, { useState } from 'react'
import FunctionMemo from './FunctionMemo'

function ParentMemo() {
    let [name,setName]=useState('eswar')
     let change=()=>{
        setName('eswarreddy')
    }
  return (
    <div>
      <button onClick={change}>click</button>
      <FunctionMemo name={name}/>
    </div>
  )
}

export default ParentMemo

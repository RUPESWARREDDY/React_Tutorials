import React, { useState } from 'react'

function UseStateWithArrays() {
    let[items,setitems]=useState([])
    const addItem=()=>{
        setitems([...items,{id:items.length,value:Math.floor(Math.random()*1000)}])
    }
  return (
    <div>
      <button onClick={addItem}>additem</button>
      <ul>{items.map(a=>{
        return <li key={a.id}>{a.value}</li>
      })}</ul>
    </div>
  )
}

export default UseStateWithArrays

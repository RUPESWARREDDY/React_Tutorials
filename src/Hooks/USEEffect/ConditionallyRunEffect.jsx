import React, { useEffect, useState } from 'react'

function ConditionallyRunEffect() {
    let[count,setcount]=useState(0)
    let[name,setname]=useState('')
    useEffect(()=>{
        console.log("useeffect-update document title");
        document.title=`you clicked ${count} times`
        }
    ,[count])
    const handleClick = (e)=>{
        setcount(++count)
                document.title=`you clicked ${count} times`
        e.preventDefault()
    }
  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={e=>{setname(e.target.value)}} />
        <button onClick={(e)=>{handleClick(e)}}>click{count}times</button>
      </form>
    </div>
  )
}

export default ConditionallyRunEffect

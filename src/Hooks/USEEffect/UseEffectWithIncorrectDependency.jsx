import React, { useEffect, useState } from 'react'

function UseEffectWithIncorrectDependency() {
    let[count,setcount]=useState(0)
    let[inter,setInter]=useState(0)
    const tick=()=>{
        setcount(prev=>prev+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
       return ()=>{
        clearInterval(interval)
       }
    },[])
    
  return (
    <div>
      {count}
      <button onClick={(e)=>{
        setcount(0); e.preventDefault()}}>click</button>
    </div>
  )
}

export default UseEffectWithIncorrectDependency

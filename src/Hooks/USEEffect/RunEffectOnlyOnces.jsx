import React, { useEffect, useState } from 'react'

function RunEffectOnlyOnces() {
    let[x,setx]=useState(0)
    let[y,sety]=useState(0)
    useEffect(()=>{
        console.log("useeffect called");
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    const logMousePosition=(e)=>{
        setx(e.clientX)
        sety(e.clientY)
    }
  return (
    <div>
      hooks x-{x} y-{y}
    </div>
  )
}

export default RunEffectOnlyOnces

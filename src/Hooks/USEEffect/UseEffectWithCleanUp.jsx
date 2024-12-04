import React, { useState } from 'react'
import RunEffectOnlyOnces from './RunEffectOnlyOnces'

function UseEffectWithCleanUp() {
    const[display,setdisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setdisplay(!display)}>click</button>
      {display&&<RunEffectOnlyOnces/>}
    </div>
  )
}

export default UseEffectWithCleanUp

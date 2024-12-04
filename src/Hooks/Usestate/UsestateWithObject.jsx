import React, { useState } from 'react'

function UsestateWithObject() {
    let[name,setname]=useState({firstname:'',lastname:''})
  return (
    <div>
        <form action="">
            <input type="text" value={name.firstname} onChange={e=>{setname({...name,firstname:e.target.value})}}/>
            <input type="text" value={name.lastname} onChange={e=>{setname({...name,lastname:e.target.value})}}/>
        </form>
      <h2>your first name is:{name.firstname}</h2>
      <h2>your first name is:{name.lastname}</h2>
    </div>
  )
}

export default UsestateWithObject

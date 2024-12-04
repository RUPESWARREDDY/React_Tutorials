import React from 'react'
import './style.css'
function Stylesheet() {
    let style={
        color:"red",
        background:"blue"

    }
  return (
    <div>
      <h1 style={style}>eswar reddy</h1>
      <h2 style={{color:'red'}}>React application</h2>
      <h3 className='primary'>love you</h3>
    </div>
  )
}

export default Stylesheet

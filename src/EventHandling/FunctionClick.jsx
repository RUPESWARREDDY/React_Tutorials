import React from 'react'

function FunctionClick() {
   function Change(){
     console.log("clicked");
    }
  return (
    <div>
        {/* <h1>{Change()}</h1> */}
      <button onClick={Change}>click</button>
    </div>
  )
}

export default FunctionClick

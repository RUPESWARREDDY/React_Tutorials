import React from 'react'
function Countuse({text,age}) {
    console.log(`rendering${text}`);
  return (
    <div>
      <h1>{text}-{age}</h1>
    </div>
  )
}
export default React.memo(Countuse)

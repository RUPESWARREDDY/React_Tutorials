import React from 'react'

function ErrorDemoChild({name}) {
    if(name==='joker')
    {
        throw new Error("not an error")
    }
  return (
    <div>
      {name}
    </div>
  )
}

export default ErrorDemoChild


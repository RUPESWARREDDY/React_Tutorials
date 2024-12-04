import React from 'react'

function NameList() {
    let arr=['eswar','rupesh','pavan','loki','jasmitha']
    let a=arr.map((a,index)=>{
        return(
            <li key={index}>{a}</li>
        )

    })
  return (
    <div>
      {arr.map((a,index)=>{
        return(
            <li key={index}>{a}</li>
        )
      })}
      {a}
    </div>
  )
}

export default NameList

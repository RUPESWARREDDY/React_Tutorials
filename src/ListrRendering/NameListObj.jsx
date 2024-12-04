import React from 'react'

function NameListObj() {
    let persons=[
        {
            id:1,
            name:"eswar",
            age:20,
            skill:'react'
        }
    ]
    let a=persons.map((a,index)=>{
        return (<li key={index}>my name is{a.name} i am {a.age} years old. i know {a.skill}</li>)
    })
  return (
    <div>
      {a}
    </div>
  )
}

export default NameListObj

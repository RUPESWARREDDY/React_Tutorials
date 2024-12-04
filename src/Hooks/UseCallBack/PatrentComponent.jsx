import React, { useCallback, useState } from 'react'
import Title from './Title'
import Countuse from './Countuse'
import ButtonUse from './ButtonUse'
function PatrentComponent() {
    let[age,setage]=useState(25)
    let[salary,setsalary]=useState(500000)
    const changeAge=useCallback(()=>{
        setage(age+1)
    },[age])
    console.log('rendering')
  return (
    <div>
        <Title/>
        <Countuse text='age' age={age}/>
        <ButtonUse handleClick={changeAge}>incrementAge</ButtonUse>
    </div>
  )
}
export default PatrentComponent

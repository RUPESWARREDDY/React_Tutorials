import React, { useMemo, useState } from 'react'


function CounterMemo() {
    let [countOne,setcountOne]=useState(0)
    let [countTwo,setcountTwo]=useState(10)
    let inceOne=()=>{
        setcountTwo(countTwo+1)
        setcountOne(countOne+1)
    }
    const IsEven=useMemo(()=>{
        console.log('render');
        let i=0
        while(i<20000)i++
        return countOne%2
    },[countOne])
  return (
    <div>
       <h1>{countOne}{countTwo}</h1> 
       <h1>{IsEven?'even':'odd'}</h1>
        <button onClick={inceOne}>inceOne</button>
      
    </div>
  )
}

export default CounterMemo

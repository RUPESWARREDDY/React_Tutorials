import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const[time,setTime]=useState(0)
    const[isActive,setIsActive]=useState(false)
    useEffect(()=>{
        let interval
        if(isActive&&time===0){
        interval=setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },10)
    }else if(!isActive&&time!==0){
   
            clearInterval(interval)
            setTime(0)
        }
        return () => clearInterval(interval);
    },[isActive])
    return (
        <>
        <h1>time:{time}</h1>
        <button onClick={()=>{setIsActive(true)}}>start</button>
        <button onClick={()=>{setIsActive(false)}}>stop</button>
        </>
    )
}
export default CountdownTimer;

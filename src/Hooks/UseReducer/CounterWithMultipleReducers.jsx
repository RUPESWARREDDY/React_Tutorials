import React, { useReducer } from 'react'
const initailstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1;
        case 'decrement':return state-1;
        case 'reset':return initailstate;
        default:return state; 
    }
}
function CounterWithMultipleReducers() {
    let[count,dispatch]=useReducer(reducer,initailstate)
    let[counttwo,dispatchtwo]=useReducer(reducer,initailstate)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>decrement</button>
        <button onClick={()=>{dispatch('reset')}}>reset</button>
        <h1>{counttwo}</h1>
        <button onClick={()=>{dispatchtwo('increment')}}>Increment</button>
        <button onClick={()=>{dispatchtwo('decrement')}}>decrement</button>
        <button onClick={()=>{dispatchtwo('reset')}}>reset</button>
      
    </div>
  )
}

export default CounterWithMultipleReducers

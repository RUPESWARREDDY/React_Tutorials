import React, { useReducer } from 'react'
const initailstate={
    firstcount:0,
    secondcount:10
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':return {...state,firstcount:state.firstcount+action.value};
        case 'decrement':return {...state,firstcount:state.firstcount-action.value};
        case 'increment2':return {...state,secondcount:state.secondcount+action.value};
        case 'decrement2':return {...state,secondcount:state.secondcount-action.value};
        case 'reset':return initailstate;
        default:return state
    }
}
function UseEffectWithComplexStateAndAction() {
    const[count,dispatch]=useReducer(reducer,initailstate)
  return (
    <div>
     <h1> firstcount:-{count.firstcount}</h1>
     <h1>secondcount:-{count.secondcount}</h1>
      <button onClick={()=>{dispatch({type:'increment',value:1})}}>increment</button>
      <button onClick={()=>{dispatch({type:'decrement',value:1})}}>decrement</button>
      <button onClick={()=>{dispatch({type:'increment2',value:10})}}>increment</button>
      <button onClick={()=>{dispatch({type:'decrement2',value:10})}}>decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
    </div>
  )
}

export default UseEffectWithComplexStateAndAction

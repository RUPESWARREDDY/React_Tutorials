import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const initailstate={
    error:'',
    loading:true,
    post:{}
}
const reducer=(state,action)=>{
switch(action.type){
    case 'success': return {error:'',loading:false,post:action.payload}
    case 'failure': return {error:'something wrong',loading:true,post:{}}
    default:return state;
}
}
function FetchDataUsingUseReducer() {
    let [count,dispatch]=useReducer(reducer,initailstate)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{dispatch({type:'success',payload:res.data})})
        .catch(err=>{dispatch({type:'failure'})})

    },[])
  return (
    <div>
      {count.loading?count.error:count.post.map(a=>{
      return(  <li key={a.id}>{a.title}</li>)
      })}
    </div>
  )
}

export default FetchDataUsingUseReducer

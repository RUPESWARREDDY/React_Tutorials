import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
function ThunkDemo() {
    let dispatch=useDispatch()
    let data=useSelector(state=>{
        return state.userdata
    })
    console.log(data.id)
    async function fetchData(dispatch,getstate){
        // let res=await fetch('https://jsonplaceholder.typicode.com/posts/1')
        // let data=res.json()
        // console.log(data,"data")
        // dispatch({type:'add',payload:data})
        // const promise = data; // Assume this returns a Promise
        // promise.then(data => {
        //   console.log(data,"shuh"); // Access your user data here
        // }).catch(err => {
        //   console.error(err);
        // });
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{dispatch({type:'add',payload:res.data})})
        .catch(err=>{console.log(err);})
    }
  return (
    <div>
        <div>
            id:{data.id}
        </div>
      <button className='btn btn-primary' onClick={()=>{dispatch(fetchData)}}>get</button>
    </div>
  )
}

export default ThunkDemo

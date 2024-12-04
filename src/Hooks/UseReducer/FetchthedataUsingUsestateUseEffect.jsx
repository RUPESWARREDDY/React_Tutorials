import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchthedataUsingUsestateUseEffect() {
    let [post,setpost]=useState([])
    let[errmsg,seterrmsg]=useState('')
    let[loading,setloading]=useState('')
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        setpost(res.data)
        setloading(true)
    })
    .catch(err=>{
        setpost({})
        seterrmsg('something went wrong')
        setloading(false)
    })
  },[])
  return (
    <div>
        <h1>fetch {loading}</h1>
      {loading?<h1>{post.title}</h1>:<h1>{errmsg}</h1>}
    </div>
  )
}

export default FetchthedataUsingUsestateUseEffect

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchDataWithUseEffectUsingButton() {
    let[post,setpost]=useState({})
    let[id,setid]=useState(1)
    let[buttonid,setbuttonid]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err);})
    },[buttonid])
  return (
    <div>
      <input type="text" value={id} onChange={e=>{setid(e.target.value)}} />
      <button onClick={()=>{setbuttonid(id)}}>click</button>
      {post.title}
    </div>
  )
}

export default FetchDataWithUseEffectUsingButton

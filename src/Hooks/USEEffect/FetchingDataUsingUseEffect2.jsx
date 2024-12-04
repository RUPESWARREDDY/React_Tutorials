import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchingDataUsingUseEffect2() {
    let[posts,setposts]=useState({})
    let[id,setid]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setposts(res.data)})
        .catch(err=>{console.log(err);})
    },[id])
    return(
    <div>
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)}/>
        {posts.title}
      
    </div>
  )
}

export default FetchingDataUsingUseEffect2

import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchingDataUsingUseEffect() {
    const[posts,setposts]=useState([])
   useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{setposts(res.data) })
    .catch(err=>{console.log(err);})
},[])
  return (
    <div>
      <ul>
        {posts.map(post=>{
         return   <li>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default FetchingDataUsingUseEffect

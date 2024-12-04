import { useState } from "react"

function Test67(){
    // let [res,setRes]=useState(false)
   function demo(){
   let res=document.querySelector('button')
   res.style.background='red' 
    }
    return(
      <>
      

     <button onMouseOver={demo}>click</button>
   
      </>
    )
}
export default Test67
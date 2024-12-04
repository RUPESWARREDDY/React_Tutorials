import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit,withdraw,updateMobile,updatename, Add,reset, debit } from './Actions'

function Formcom() {
    let dispatch=useDispatch()
    
    let [amount,setamount]=useState(null)
    let[fullname,setfullname]=useState('')
    let[mobile,setmobile]=useState('')
    let[id,setid]=useState(0)
  return (
    <>
    <div className='container'>
        <h2>Form Details</h2>
        <div className='row'>
        <div className='d-flex col-6'>
            <input type="text" value={amount} placeholder='enter amount here' className='form-control' onChange={(e)=>{
                setamount(e.target.value) }} />
                <button  className='btn btn-primary' onClick={()=>{
                    dispatch(deposit(amount))
                    setid(id+1)
                    setamount(0)
                    dispatch(Add(id,amount))
                }}>deposit</button>
                <button className='btn btn-success' onClick={()=>{dispatch(withdraw(amount))
                setid(id+1)
                    dispatch(debit(id,amount))
                }}>withdraw</button>
        </div>
        
        </div>
        <div className='row mt-3'>
        <div className='d-flex col-6'>
            <input type="text" value={fullname} placeholder='enter Name here' className='form-control' onChange={(e)=>{
                setfullname(e.target.value)
                 }} />
                <button  className='btn btn-primary' onClick={()=>{dispatch(updatename(fullname))
                    setfullname('')
                }}>UpdateName</button>
              
        </div>
        
        </div>
        <div className='row mt-3'>
        <div className='d-flex col-6'>
            <input type="digit" value={mobile} placeholder='enter number here' className='form-control' onChange={(e)=>{
                setmobile(e.target.value) }} />
                <button  className='btn btn-primary' onClick={()=>{dispatch(updateMobile(mobile))
                    setmobile('')
                }}>UpdateMobile</button>
                
        </div>
        <button className='col-2 btn btn-danger' onClick={()=>{dispatch(reset())}}>reset</button>
        
        </div>
    </div>
    </>
  )
}

export default Formcom

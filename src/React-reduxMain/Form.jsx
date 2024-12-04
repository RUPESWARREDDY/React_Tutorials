import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit,withdraw,updatename,updateMobile,reset } from './Actions'
function Form1() {
    let dispatch=useDispatch()
    let [fullname,setfullname]=useState('')
    let[mobile,setMobile]=useState('')
    const[amount,setamount]=useState(0)
  return (
    <>
    <div className='container mt-3'>
        <h2 className='text-secondary'>Form</h2>
        <div className='row'>
            <div className='col-6'>
                <div> 
                    <input type="digit" className='form-control' value={amount} placeholder='enter amount here ' onChange={(e)=>{let data=e.target.value; setamount(data)}} />
                </div>
                <div>
                <button className='btn btn-primary' onClick={()=>{dispatch(deposit(amount))}}>deposit</button>
                <button className='btn btn-danger'onClick={()=>{dispatch(withdraw(amount))}}>withdraw</button>
                </div>
                </div> 
        </div>
        <div className='row'>
            <div className='col-6'>
            <input type="text" className='form-control' value={fullname} placeholder='enter full name here ' onChange={(e)=>{let data=e.target.value; setfullname(data)}} />
            <button className='btn btn-primary' onClick={()=>{dispatch(updatename(fullname))}}>UpdateName</button>


            <input type="digit" className='form-control' value={mobile} placeholder='enter mobile number here ' onChange={(e)=>{let data=e.target.value; setMobile(data)}} />
            <button className='btn btn-primary' onClick={()=>{dispatch(updateMobile(mobile))}}>UpdateNumber</button>
            <button className='btn btn-danger' onClick={()=>{dispatch(reset())
        setfullname('');setMobile('');setamount('')}}>Reset</button>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Form1

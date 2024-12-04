import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFullname,updateMobile,desposit,withdraw, addTransaction } from './Store';
function Form() {
    let[balance,setbalance]=useState(0);
    let[fullname,setfullname]=useState('');
    let[mobile,setMobile]=useState('');
    let dispatch=useDispatch()
    let fullname1=useSelector(state=>{ return state.user.fullname})
  return (
    <>
    <div className="container">
    <h1 className='text-warning'>Form Details</h1>
        <div  className='d-flex'>
              <div>
                <input type="digit" name='balance' value={balance} className='form-control'  placeholder='enter your balance' onChange={(e)=>{let data=e.target.value; setbalance(data)}}  />
                </div>
                 <button className="btn btn-primary ms-2" onClick={()=>{dispatch(desposit(balance));dispatch(addTransaction({type:'credit',timestamp:new Date().toISOString(),accountName:fullname1,amount:balance})); setbalance('');}}>Deposit</button>
                 <button className="btn btn-danger ms-2" onClick={()=>{dispatch(withdraw(balance));dispatch(addTransaction({type:'debit',timestamp:new Date().toISOString(),accountName:fullname1,amount:balance}));setbalance('')}}>Withdraw</button>
        </div>
        <div  className='d-flex mt-3'>
              <div>
                <input type="digit" name='fullname' value={fullname} className='form-control'  placeholder='enter your fullname' onChange={(e)=>{setfullname(e.target.value)}}  />
                </div>
                 <button className="btn btn-primary ms-2" onClick={()=>{dispatch(updateFullname(fullname)); setfullname('')}}>Update</button>   
        </div>
        <div  className='d-flex mt-3'>
              <div>
                <input type="digit" name='mobile' value={mobile} className='form-control'  placeholder='enter your mobile number' onChange={(e)=>{setMobile(e.target.value)}}  />
                </div>
                 <button className="btn btn-primary ms-2" onClick={()=>{console.log(dispatch(updateMobile(mobile))); dispatch(updateMobile(mobile)); setMobile('')}}>Update</button>
                
        </div>
    </div>
    </>
  )
}

export default Form

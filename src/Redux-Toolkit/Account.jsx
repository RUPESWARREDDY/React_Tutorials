import React from 'react'
import { useSelector } from 'react-redux'

function Account() {
    let data=useSelector(state=>{return state.user})
    let data1=useSelector(state=>{return state.transaction})
    console.log(data1);
  return (
   <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-6">
            <h1 className='text-primary'>Account Details</h1>
            <table className="table table-bordered w-75">
                <thead>
                    <tr>
                        <td>Balance</td>
                        <td>FullName</td>
                        <td>Mobile</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.fullname}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row">
        <div className="col-6">
            <h1 className='text-primary'>Transaction  Details</h1>
            <table className="table table-bordered w-75">
                <thead>
                    <tr>
                        <td>type</td>
                        <td>TimeStamp</td>
                        <td>AccountName</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                   {data1.map(a=>{
                   return (
                        <tr>
                            <td>{a.type}</td>
                            <td>{a.timestamp}</td>
                            <td>{a.accountName}</td>
                            <td>{a.amount}</td>
                        </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
    </div>
   </div>
   </>
  )
}

export default Account

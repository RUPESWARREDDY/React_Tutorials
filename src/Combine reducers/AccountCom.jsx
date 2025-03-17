import React from 'react'
import { useSelector } from 'react-redux'

function AccountCom() {
    let data=useSelector(
        (state)=>{
            return state
        }
    )
    console.log(data);
  return (
   <>
   <div className='container'>
    <h2 className='text-primary'>Account details</h2>
    <div className='row'>
            <div className='col-6'>
                <table className='table table-bordered w-500'>
                    <thead>
                        <th>amount</th>
                        <th>fullname</th>
                        <th>mobile</th>
                    </thead>
                    <tbody>
                        <td>{data.account.balance}</td>
                        <td>{data.account.fullname}</td>
                        <td>{data.account.mobile}</td>
                    </tbody>
                </table>
            </div>
        </div>
        <h2 className='text-primary'>Account details</h2>
    <div className='row'>
            <div className='col-6'>
                <table className='table table-bordered w-500'>
                    <thead>
                        <th>id</th>
                        <th>amount</th>
                        <th>Date</th>
                        <th>Type</th>
                      
                    </thead>
                    <tbody>
                        {data.transaction.map((tr,index)=>{
                            return <tr key={index}>
                                <td>{tr.id}</td>
                                <td>{tr.amount}</td>
                                <td>{tr.date}</td>
                                <td>{tr.type}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
{/* //adeed */}
   </div>
   </>
  )
}

export default AccountCom

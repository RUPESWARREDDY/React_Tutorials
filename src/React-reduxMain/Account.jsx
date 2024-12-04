import React from 'react'
import { useSelector } from 'react-redux'

function Account() {
   let data= useSelector((state)=>{
        return state
    })
  return (
    <>
    <div className='container mt-3'>
        <h2 className='text-primary'>AccountDetails</h2>
        <div className='row'>
            <div className='col-6'>
                <table className='table table-bordered w-500'>
                    <thead>
                        <th>amount</th>
                        <th>fullname</th>
                        <th>mobile</th>
                    </thead>
                    <tbody>
                        <td>{data.balance}</td>
                        <td>{data.fullname}</td>
                        <td>{data.mobile}</td>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </>
  )
}

export default Account

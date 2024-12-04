import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
      this is users page
      <Link to='orders'><button>orders</button></Link>
      <Link to='products'><button>products</button></Link>
      <Outlet/>
    </div>
  )
}
export function Orders(){
  return (
   <h1>orders page</h1>
  )
}
export function Products(){
  return (
   <h1>products page</h1>
  )
}

export default Users

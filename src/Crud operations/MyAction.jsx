import React, { useEffect, useState } from 'react'
import axios from 'axios'
function MyAction() {
    let[detail,setDetail]=useState({
        name:'',
        email:'',
        password:'',
        age:''
    })
    let [store,setStore]=useState([])
    let [edited,setEdited]=useState(false)
    let[editid,setEditId]=useState(null)
    const submit=(e)=>{
        e.preventDefault()
        if(editid)
        {
            axios.put(`http://localhost:3000/details/${editid}`, detail)
            .then((response) => {
               
                setStore(store.map(item => item.id === editid ? response.data : item));
            
                setEdited(false);
                setEditId(null);
                setDetail({ name: '', email: '', age: '', password: '' }); 
            });
        }
        else{
        axios.post('http://localhost:3000/details',detail)
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})
        setDetail({name:'',email:'',password:'',age:''})
        }
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/details')
        .then(res=>{setStore(res.data)})
        .catch(err=>{alert(err)})
    })
    const delete1=(a)=>{
        axios.delete(`http://localhost:3000/details/${a.id}`)
        .then(()=>{setStore(store.filter(v=>v.id!==a.id))})
    }
    const edit=(a)=>{
       setDetail({
        name:a.name,
        email:a.email,
        password:a.password,
        age:a.age
       })
       setEdited(true)
       setEditId(a.id)
    }
  return (
  <>
  <div style={{textAlign:'center'}}>
  <h1>Crud operations</h1>
  <form onSubmit={submit}>
    <label>Name:</label>
    <input type="text" value={detail.name} name='name' onChange={(e)=>{setDetail({...detail,[e.target.name]:e.target.value})}}/> <br />
    <label>Email:</label>
    <input type="email"  value={detail.email} name='email' onChange={(e)=>{setDetail({...detail,[e.target.name]:e.target.value})}}/> <br />
    <label htmlFor="">password</label>
    <input type="password"  value={detail.password} name='password' onChange={(e)=>{setDetail({...detail,[e.target.name]:e.target.value})}}/> <br />
    <label htmlFor="">age:</label>
    <input type="date" value={detail.age} name='age' onChange={(e)=>{setDetail({...detail,[e.target.name]:e.target.value})}} /> <br />
    <button>{edited?'update':'submit'}</button>
  </form>
  <table border='2' align='center'>
    <tr>
        <td>s.no</td>
        <td>name</td>
        <td>password</td>
        <td>email</td>
        <td>age</td>
    </tr>
    {store.map(a=>{
        return <tr>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.email}</td>
            <td>{a.password}</td>
            <td>{a.age}</td>
            <td><button onClick={()=>{edit(a)}} >edit</button></td>
            <td><button onClick={()=>{delete1(a)}}>delete</button></td>
        </tr>
    })}
  </table>
  </div>
  </>
  )
}

export default MyAction

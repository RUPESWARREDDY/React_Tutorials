import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
function Login() {
    let [name,setname]=useState('')
    let [password,setpassword]=useState('')
    const [error, setError] = useState('');
    const changeHandle=(e)=>{
        setname(e.target.value)
    }
    const changeHandle1=(e)=>{
        setpassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.get('http://localhost:3000/data')
        .then(res => {
            const post = res.data;
           
            const user = post.find(u => u.username === name && u.password === password);
           console.log(user);
            if (user) {
            
                window.open('http://localhost:3000/data', '_blank');
            } else {
              
                setError('Invalid credentials');
            }
        })
        .catch(err => {
            console.error(err);
            setError('An error occurred while fetching data');
        });
         
    }
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-container">
            <h2 className="login-header text-center">Login</h2>
            <form>
                <div className="">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name='name' id="username" placeholder="Enter your username" required onChange={changeHandle}/>
                </div>
                {error && <div style={{color:'red'}}>invalid email</div>}
                <div className="">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" placeholder="Enter your password" required onChange={changeHandle1}/>
                </div>
                {error && <div style={{color:'red'}}>invalid password</div>}
                <button type="submit" className="btn btn-primary login-button" onClick={handleSubmit}>Login</button>
                <div className="forgot-password">

                    <a href="#">Forgot password?</a>
                </div>
                {error && <div style={{color:'red'}}>invalid password</div>}
            </form>
        </div>
        
    </div>
    </div>
  )
}

export default Login

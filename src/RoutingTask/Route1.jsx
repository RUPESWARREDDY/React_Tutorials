import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
function Route1() {
  return (
    <Router>
    <div>
        <nav>
            <ul style={{listStyleType:'none',display:'flex',padding:'10px',textAlign:'center'}}>
                <li style={{marginRight:'10px'}}>
                    <Link to="/register" style={{textDecoration:'none'}}>Register</Link>
                </li> 
                <li>
                    <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
</Router>
  )
}

export default Route1

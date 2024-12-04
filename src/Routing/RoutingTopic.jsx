import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Users, { Orders, Products } from './Users';
import ErrorPage from './ErrorPage';


function RoutingTopic() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />}>
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} /> 
        </Route>
        <Route path="*" element={<ErrorPage />} /> {/* Wildcard route */}
      </Routes>
    </Router>
  );
}

export default RoutingTopic;

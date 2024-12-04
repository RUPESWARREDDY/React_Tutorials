import React, { useState } from 'react'
import axios from 'axios';
import './Register.css'

function Register() {
    const data = {
        India: {
          Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
          Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
        },
        USA: {
          California: ['Los Angeles', 'San Francisco', 'San Diego'],
          Texas: ['Houston', 'Austin', 'Dallas'],
        },
      };
      
    const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  
  const countries = Object.keys(data);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(''); // Reset state when country changes
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        preferences: '',
        terms: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
       console.log(checked);
        setFormData(prevState => (
            {
            ...prevState,
            [name]:type==='checkbox'?checked:value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       axios.post('http://localhost:3000/data',formData)

        console.log('Form Data Submitted:', formData);
       
    };
  return (
    <div>
     <div className="container main">
            <h2 className="my-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label><br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            // checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            // checked={formData.gender === 'other'}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="preferences">Select your preferences</label>
                    <select
                        className="form-control"
                        id="preferences"
                        name="preferences"
                        value={formData.preferences}
                        onChange={handleChange}
                    >
                        <option value="">Choose...</option>
                        <option value="React">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div className="form-group">
                <label>
  Country:
  <select className="form-control me-3"
                        id="preferences"
                        name="preferences"
                        value={selectedCountry} onChange={handleCountryChange}>
    <option value="">Select Country</option>
    {countries.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ))}
  </select>
</label>

{selectedCountry && (
  <label>
    State:
    <select className="form-control me-1"
                        id="preferences"
                        name="preferences" value={selectedState} onChange={handleStateChange}>
      <option value="">Select State</option>
      {Object.keys(data[selectedCountry]).map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  </label>
)}

{selectedState && (
  <label>
    Mandal:
    <select className="form-control ms-3"
                        id="preferences"
                        name="preferences">
      <option value="">Select Mandal</option>
      {data[selectedCountry][selectedState].map((mandal) => (
        <option key={mandal} value={mandal}>
          {mandal}
        </option>
      ))}
    </select>
  </label>
)}
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="terms">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
   

    </div>
  )
}

export default Register

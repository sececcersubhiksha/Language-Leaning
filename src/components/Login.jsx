import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ navigateTo }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
  
    try {
      const response = await axios.post('https://language-leaning-backend-1.onrender.com/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        alert('Login Successful!');
        navigate('/language');
      }
    } catch (err) {
      console.error("Error during login:", err);
  
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid email or password.");
          alert("Invalid email or password.");
        } else if (err.response.status === 404) {
          setError("Email does not exist.");
          alert("Email does not exist.");
        } else {
          setError("Something went wrong. Please try again.");
          alert("Something went wrong. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
        alert("Network error. Please check your connection.");
      }
    }
  };
  

  return (
    <div className='containerstyle'>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">Login</h1>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="submit-btn" type="submit">
            Login
          </button>
        </form>
        <button className="backtohome-btn" onClick={() => navigateTo('')}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default Login;



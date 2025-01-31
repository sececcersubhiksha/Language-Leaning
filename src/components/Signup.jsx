import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ navigateTo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post('https://language-leaning-backend-1.onrender.com/signup', {
        name,
        email,
        password,
      });
      alert('Signup successful!');
      navigate('/language'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className='containerstyle'>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">Sign Up</h1>

          <div className="form-group">
            <label>Username:</label>
            <input type="text" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <button className="submit-btn" type="submit">
            Register
          </button>
        </form>

        <button className="backtohome-btn" onClick={() => navigateTo('')}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default Signup;

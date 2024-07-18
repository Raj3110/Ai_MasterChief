import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';
import loginPic from '../Assets/signup.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        login({ email });
        navigate('/dashboard');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div>
      <div class="back-img">
        <img id="img" src={loginPic} alt="signin-pic" />
      </div>
      <div class="first-con">
        <h1 class="user-login">Sign Up</h1>
        <p class="welcome">Hello User !</p>
      </div>

      <div class="sec-con">
        <label>Username </label> <br />
        <form onSubmit={handleSubmit}>
          <input
            class="username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br /> <br />
          <label>Password</label> <br />
          <input
            class="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br /> <br />
          {message && <p>{message}</p>}
          <button type="submit" class="button-56">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
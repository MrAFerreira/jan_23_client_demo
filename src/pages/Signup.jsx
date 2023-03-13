// src/pages/SignupPage.js

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../services/auth.service';

const API_URL = 'http://localhost:5005';

function Signup(props) {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Email:</label>
        <input type="email" name="name" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={'/login'}> Login</Link>
    </div>
  );
}

export default Signup;

// src/components/RegisterForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigation function
  const registrationStatus = useSelector((state) => state.user);

  const handleRegister = async () => {
    await dispatch(registerUser(email, password));
    
    if (!registrationStatus.error) {
      // Navigate to the success page after a successful registration
      navigate('/success');
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <h2>Log in Here </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {registrationStatus.error && <p>Error: {registrationStatus.error}</p>}
    </div>
  );
};

export default RegisterForm;

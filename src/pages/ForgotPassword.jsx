import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Make an API request to initiate password recovery
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error initiating password recovery:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPassword}>Submit</button>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPassword;

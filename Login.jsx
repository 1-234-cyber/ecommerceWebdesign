import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import './Login.css';

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  if (email.includes('@') && password.length >= 8) {
  login(email);
  navigate('/');


    } else {
      setError('Please enter a valid email and a password with at least 8 characters.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min 8 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

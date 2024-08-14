import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = ({ setUserId }) => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (id) {
      setUserId(id);
      navigate('/feed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter user ID" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default Login;

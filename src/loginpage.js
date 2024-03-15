import React, { useState } from 'react';
import './loginpage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, for simplicity, let's just check if username and password match
    if (username === 'sindhu' && password === '1234567') {
      setLoggedIn(true);
      alert('login successfully');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div className="welcome-message">
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <label className='sample'>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label className='sample'>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;

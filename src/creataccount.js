import React, { useState } from 'react';
import './accountpage.css'

const CreateAccountPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your create account logic
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Here you can proceed with creating the account, for simplicity, let's just log the input values
    console.log('Username:', username);
    console.log('Email:', email);
    //console.log('phone.No:',phone.No);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    alert('Account created successfully!');
    // Reset form fields
    setUsername('');
    setEmail('');
    //setphoneNO('6374441283');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    
    <div className="create-account-container">
     
      <form className="create-account-form" onSubmit={handleSubmit}>
        <label className='sample'>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='sample'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='sample'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label className='sample'>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;

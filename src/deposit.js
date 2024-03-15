import React, { useState } from 'react';
import './deposit.css'; // Import the CSS file

const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, setBalance] = useState(1000); // Initial balance

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount to deposit.');
      return;
    }

    // Perform deposit
    setBalance(prevBalance => prevBalance + amount);
    setDepositAmount('');
    alert(`Deposit successful. New balance: ${balance + amount}`);
  };

  const handleChange = (e) => {
    setDepositAmount(e.target.value);
  };

  return (
    <div className="deposit-container">
      <h2 className='sample'>Deposit </h2>
      <p className='sample'>Current Balance: ${balance}</p>
      <label htmlFor="depositAmount">Deposit Amount:</label>
      <input
        type="number"
        id="depositAmount"
        value={depositAmount}
        onChange={handleChange}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;

import React, { useState } from 'react';
import './Withdraw.css'; // Import the CSS file

const Withdrawpage = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [balance, setBalance] = useState(1000); // Initial balance

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount to withdraw.');
      return;
    }

    if (amount > balance) {
      alert('Insufficient balance.');
      return;
    }

    // Perform withdrawal
    setBalance(prevBalance => prevBalance - amount);
    setWithdrawAmount('');
    alert(`Withdrawal successful. New balance: ${balance - amount}`);
  };

  const handleChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  return (
    <div className="withdraw-container"> {/* Apply the CSS class here */}
      <h2 className='sample'>Withdraw </h2>
      <p className='sample'>Current Balance: ${balance}</p>
      <label htmlFor="withdrawAmount">Withdraw Amount:</label>
      <input
        type="number"
        id="withdrawAmount"
        value={withdrawAmount}
        onChange={handleChange}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdrawpage;

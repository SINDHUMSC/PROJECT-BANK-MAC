// UserData.js
import React from 'react';
import './Sampledata.css';

const  AllDataPage = ({ user }) => {
  return (
    <div className="user-data">
      <h2>User Information</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Ammount:</strong> {user.ammount}</p>
        {/* Add more user data fields as needed */}
      </div>
    </div>
  );
}

export default AllDataPage;

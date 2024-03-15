import React from 'react';
import './alldata.css'; // Import CSS file

const AllDataPage = () => {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];

  return (
    <div className="all-data-container">
      <h2>All Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div className="name">Name: {item.name}</div>
            <div className="age">Age: {item.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllDataPage;

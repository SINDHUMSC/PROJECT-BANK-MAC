// App.js
import React from 'react';
import AllDataPage from './sampledata';

const user = {
  name: 'sindhu',
  email: 'sindhu@gmail.com',
  ammount: '1000'
  // Add more user data fields as needed
};

function UserDataForm() {
  return (
    <div className="App">
      <AllDataPage user={user} />
    </div>
  );
}

export default UserDataForm;

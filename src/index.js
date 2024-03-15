import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './loginpage';
import CreateAccountPage from './creataccount';
import Logopage from './Home';
import DepositPage from './deposit';
import WithdrawPage from './Withdraw';
import AllDataPage from './alldata';
import Bank from './App';
import Project from './navigation';
import App5 from './Mainapp';
import UserDataForm from './userdata';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App5/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

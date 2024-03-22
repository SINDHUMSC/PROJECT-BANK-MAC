//import "bootstrap/dist/css/bootstrap.min.css";
//import './create.css';
//import './home.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import Usercontext from "./context";
import React from "react";
import CreateAccountPage from "./creataccount";
import Navbar from "./navigation";
import Home from "./Home";
import DepositPage from "./deposit";
import Withdraw from "./Withdraw";
//import Userdata from "./UserData";
import {  HashRouter, Route,Routes } from "react-router-dom";
//import Login from "./login";
//import UserDataForm from "./user";
import LoginPage from "./loginpage";
import UserDataForm from "./userdata";
function App5(){
  return(
    <>
    <div>
      <HashRouter>
        <Navbar/>
        <Usercontext.Provider
        value={{
          users:[{
            name: "sindhu",
            email: "sindhu@gmail.com",
            phone:6372441283,
            age:21,
            gender:'Female',
            password: "3074",
            balance:0
            }],
            currentUser:[]
        }}>
          <Routes>
            <Route path="/Home" exact element={<Home/>}/>
            <Route path="/creataccount" element={<CreateAccountPage/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/deposit" element={<DepositPage/>}/>
            <Route path="/Withdraw" element={<Withdraw/>}/>
            <Route path="/userdata" element={<UserDataForm/>}/>
            
          </Routes>
        </Usercontext.Provider>
    
       </HashRouter>

    </div>
    </>
  )
}
export default App5;

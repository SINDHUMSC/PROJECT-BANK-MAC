import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
//import image from "./icons8-bank-66.png";
function Navbar(){
    return(
        <nav class="navbar  Nav navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/Home">Home</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#/creataccount">create account</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/loginpage">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/deposit">Deposit</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/Withdraw">WithDraw</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/userdata">Users Data</a>
              </li>
            </ul>
            
          </div>
          {/* <h2 className="bname">EASY BANK </h2>
          <a href="#/"><input type="image" src={image} id="img"/></a>
           */}
        </div>
      </nav>

    );
}
export default Navbar;
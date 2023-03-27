import React from 'react'
import logo from './logo.png'
import "./Navbar.css"
// import About from './About';

export default function Navbar() {
  return (
      <div className="navBar">
        <div className="navbar-component">
            <div className="logo">
            <div>
              <img src={logo} alt="" />
            </div> 
              <div className="para">
              <strong>Virat Raj</strong>
              </div>
          </div>

          <div className="main">
            <ul className='main-links'>
                <li className="links">
                    <a href="./#Home">Home</a>
                </li>
                <li className="links">
                    <a href="./#About">About</a>
                </li>
                <li className="links">
                    <a href="./#Projects">Projects</a>
                </li>
                <li className="links">
                    <a href="./#ContactMe">Contact Me</a>
                </li>
            </ul>
          </div>


        </div>
      </div>
  );
}

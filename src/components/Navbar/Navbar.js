import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

  return (
    <div className='navbar' >
        <Link to={"/"} className='logo'>
            <strong>LOGO</strong>
        </Link>
        
        <ul className='nav-links'>
            <Link to={"/"} className='home'>
                <strong>HOME</strong>
            </Link>
            <Link to={"/About"} className='about'>
                <strong>ABOUT US</strong>
            </Link>
            <Link to={"/Projects"} className='projects'>
                <strong>PROJECTS</strong>
            </Link>
            <Link to={"/WhatWeDo"} className='WhatWeDo'>
                <strong>WHAT WE DO</strong>
            </Link>
            <Link to={"/Contact"} className='contactUs'>
                <strong>CONTACT US</strong>
            </Link>
            <button to='/SignUp' className='signUp'>
                Sign Up
            </button>


        </ul>
    </div>
  )
}

export default Navbar;
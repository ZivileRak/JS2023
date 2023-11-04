import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar () {

  return (
    <div className ="navbar">
        <ul className ="navigationMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shopcart">Shopping cart</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/product">SPA equitment</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;



import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = ()=> {

  return (
    <div className ="navbar">
        <Link className = "links" to="/"><h6>Home</h6></Link>
        <Link className = "links" to="/shopcart"><h6>Shopping cart</h6></Link>
 

        <Link className = "links" to="/product"><h6>SPA equitment</h6></Link>

        <Link className = "links" to="/login"><h6>Login</h6></Link>
 
        <Link className = "links" to="/register"><h6>Register</h6></Link>

        <span>Logout</span>

    </div>
  )
}

export default Navbar;



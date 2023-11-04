import React, { useState } from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>  // nav dalis istrinta ideta zemiau

        </header>
  
        <main className="container mt-4">
              
          <section id="user-account" className="text-center">
            <h1 className="mb-4">Login</h1>
            <p>Please enter email and pasword to sign on.</p>
          </section>
    
            <form className="authorization">
            <input required type = "email" placeholder = 'email'/>
            <input required type = "password" placeholder = 'password'/>                  
            <button>Login </button>
            <p className="error">Error placeholder!!!!</p>
            <span className="span"> "If don't have account, please register"<Link to ="/register">Register</Link>

            </span>

          </form>
        </main>
          

      </div>
    );
  }
  
  export default Login;


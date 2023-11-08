
import React  from 'react'

import './styles.css';
import { Link } from 'react-router-dom';

import { useState }  from 'react' 
import axios from 'axios'



function Login() {


  


    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>
          <h3>Login</h3>
        </header>
       
              <body>
                <form >
                  <div className="authorization">
                        
                  
                  
                  <input required type = "email" placeholder = 'email' name='email' />
                  
                  <input required type = "password" placeholder = 'password' name='password' />  
                           
                  <button type="submit">Login </button>
                  <p className="error">Error placeholder!!!!</p>
                <span className="span"> "If you have account, please login" <Link to ="/register">Register</Link> </span>
                </div>
                

    
                </form>
              </body>
            
      </div>
    );
  }
  
  export default Login;


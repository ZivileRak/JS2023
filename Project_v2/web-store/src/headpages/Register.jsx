import React  from 'react'
import { useState }  from 'react' 
import './styles.css';
import { Link } from 'react-router-dom';

const Register =()=> {
  const[inputs, setInputs]= useState=({
    name:"",
    surname:"",
    email:"",
    password:"",  

  })
  const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

  }
  console.log(inputs)

    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>

        </header>
        <main className="container mt-4">
              
              <section id="user-account" className="text-center">
                <h1 className="mb-4">Register</h1>
                <p>Please register by entering information below</p>
              </section>
        
                <form className="authorization">
                <input required type ="text" placeholder = 'name' name='name'  onChange={handleChange}/>
                <input required type = "Surname" placeholder = 'surname' name='surname'onChange={handleChange}/>
                <input required type = "email" placeholder = 'email' name='email' onChange={handleChange}/>
                <input required type = "password" placeholder = 'password' name='password' onChange={handleChange}/>                 
                <button>Login </button>
                <p className="error">Error placeholder!!!!</p>
                <span className="span"> "If you have account, please login" <Link to ="/login">Login</Link>
    
                </span>
    
              </form>
            </main>
      </div>
    );
  }
  
  export default Register;


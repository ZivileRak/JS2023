
import React  from 'react'

import './styles.css';
import { Link } from 'react-router-dom';

import { useState, useEffect }  from 'react' 


function Register () {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const register = (e) => {

    if (name === "") {
      window.alert("Name can't be empty");
      return;
  }
    if (surname === "") {
    window.alert("Surname can't be empty");
    return;
  }
    if (email === "") {
    window.alert("Email can't be empty");
    return;
  }
  
    if (password === "") {
        window.alert("Password can't be empty");
        return;
      }
   
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    fetch("http://localhost:5000/register", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ registerName: name, registerSurname: surname, registerEmail: email, registerPassword: password })
     
    }).then((response) => {
        response.json().then((body) => {
            if (body.error === null) {
                alert("Customer created");
                sessionStorage.setItem("user", name);
                window.location.reload();
            }
            else {
                alert(body.error);
                
            }
        });
    })
}

    
    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>
          <h3>Register</h3>
        </header>      
              <body>
                <form action>
                  <div className="authorization">

                      
                  <input required type ="text" placeholder = "name" onChange={(e)=> {setName(e.target.value)}}/> 
                
                
                  <input required type = "Surname" placeholder = "surname" onChange={(e)=> {setSurname(e.target.value)}}/>
                  
                  <input required type = "email" placeholder = "email" name='email' onChange={(e)=> {setEmail(e.target.value)}}/>
                  
                  <input required type = "password" placeholder = "password" name='password' onChange={(e)=> {setPassword(e.target.value)}}/>  
                           
                  <button type="submit" onClick={register}>Register </button>
                  <p className="error">Error placeholder!!!!</p>
                <span className="span"> "If you have account, please login" <Link to ="/login">Login</Link> </span>
                </div>
                <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
                </form>
              </body>
            
      </div>
  
    );
 
}
  export default Register;




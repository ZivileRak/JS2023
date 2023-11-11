
import React  from 'react'
import Validation from '../Components/RegisterValidation.js';
import './styles.css';
import { Link } from 'react-router-dom';

import { useEffect, useState }  from 'react' 
import axios from 'axios'



function Login() {

  const [email, setEmailLogin] = useState("");
  const [password, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  useEffect(()=>{
    sessionStorage.clear();
        },[]);

        
  const login =(e) =>{

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
    fetch("http://localhost:5000/customer", {
        method: "GET",
        headers: headers,
      
    }).then((response) => {
      response.json().then((body) => {
          if (body.error === null) {
            setEmailLogin(body.response);
          }
          else {
              alert(body.error);
          }
        }
  )})
 
}    
  

/*-------------------------------
  
  const login =(e) =>{
    e.preventDefault(); 
     axios.post("http://localhost:8081/web_store",{
      email: email,
      password: password,
      }).then((response)=>{
        if(response.data.message);}
      else{
          setLoginStatus(response.data[0].email);
  
        }
      })
    
  }*/


  /*
  const[errors,setErrors]=useState([])

  const handleInput = (event)=>{ 
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name ==="" && errors.surname ==="" && errors.email ==="" &&  errors.password ==="") 
    {
      axios.post('http://localhost:8081/web_store',values)
      .then (res => console.log(res))
      .catch(err=> console.log(err));
    }
  }*/

    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>
          <h3>Login</h3>
        </header>
       
              <body>
                <form >
                  <div className="authorization">

                  <input required type = "email" placeholder = 'email' name='email' onChange={(e)=> {setEmailLogin(e.target.value)}}/>
                  
                  <input required type = "password" placeholder = 'password' name='password' onChange={(e)=> {setPasswordLogin(e.target.value)}}/>  
                           
                  <button type="submit" onClick={login}>Login </button>
                  <p className="error">Error placeholder!!!!</p>
                <span className="span"> "If you have account, please login" <Link to ="/register">Register</Link> </span>
                </div>
                <h1 style ={{fontSize:"15px", textAlign: "center"}}>{loginStatus}</h1>
                <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
      
                </form>
              </body>
            
      </div>
    );
  }
  
  export default Login;


                  /* iskopijuota pries footer
                <h1 style ={{fontSize:"15px", textAlign: "center"}}>{loginStatus}</h1> */

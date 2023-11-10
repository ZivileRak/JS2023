/*
import React  from 'react'
import Validation from '../Components/RegisterValidation.js';
import './styles.css';
import { Link } from 'react-router-dom';

import { useState, useEffect }  from 'react' 
import Axios from 'axios'


function Register () {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register =(e) =>{
    e.preventDefault();
    Axios.post("http://localhost:5000/register",{
      name: name,
      surname: surname,
      email: email,
      password: password,
    }).then((response)=>{
      console.log("Customer registered");
    })
  }*/

  /*
    const Product= () => {
  const [Data, setData]= useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
  },[])

  return (
    */
    /*
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
                <h1 style ={{fontSize:"15px", textAlign: "center"}}>{registerStatus}</h1>
                </form>
              </body>
            
      </div>
    );
  }
  
  export default Register;
*/



/*import React  from 'react'
import Validation from '../Components/RegisterValidation.js';
import './styles.css';
import { Link } from 'react-router-dom';

import { useState }  from 'react' 



const Register =()=> {

  const[errors,setErrors]=useState({})

    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>
          <h3>Register</h3>
        </header>

       
              <body>
                <form action="" onSubmit </main>={handleSubmit} >
                  
                        
                <input required type ="text" placeholder = 'name' />
                
                <input required type = "Surname" placeholder = 'surname' />
                
                <input required type = "email" placeholder = 'email' />
                
                <input required type = "password" placeholder = 'password' />  
                {errors.password && <span>{errors.password}</span> }               
                <button type="submit">Login </button>
                <p className="error">Error placeholder!!!!</p>
                <span className="span"> "If you have account, please login" <Link to ="/login">Login</Link> </span>
                
                </form>
              </body>
  
              
         
    </div>
  );
}

export default Register;*/
import React, { useState } from 'react'
import './styles.css';


/*const Login= () => {
    return(
    <div className = 'authorization'>
        <h1>Login</h1>
        <form>
            <input type ="text" placeholder = 'username'/>
            <input type = "password" placeholder = 'password'/>
            <button>Login </button>
                
        </form>
      

    </div>

    )
}
export default Login*/

function Login() {
    return (
      <div>
        <header className="bg-dark text-white text-center py-3">
          <h1>SPA equipment webshop</h1>
          <nav className="mt-3">
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Namai</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Spa Vonios</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Krepšelis</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Vartotojo Paskyra</a></li>
            </ul>
          </nav>
        </header>
  
        <main className="container mt-4">
              
          <section id="user-account" className="text-center">
            <h2 className="mb-4">Mano Vartotojo Paskyra</h2>
            <p>Čia galite valdyti savo paskyrą, užsakymus ir kita informaciją.</p>
          </section>
    
            <form>
            <input type ="Name" placeholder = 'Name'/>
            <input type = "Surname" placeholder = 'Surname'/>
            <input type = "email" placeholder = 'email'/>
            <input type = "password" placeholder = 'password'/>
            <button>Login </button>
          </form>
        </main>
          
        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
      </div>
    );
  }
  
  export default Login;
import React, { useState } from 'react';
import './styles.css'; // Stilių failas
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async (e) => {
    e.preventDefault(); // Neperkrauti puslapio po mygtuko paspaudimo

    if (name === '' || surname === '' || email === '' || password === '') {
      setError("All fields are required");
      return;
    }
    if (password.length < 8 ) { // papildyta 11.12
      window.alert("Password must be at least 8 character");
      return;
        }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          registerName: name,
          registerSurname: surname,
          registerEmail: email,
          registerPassword: password,
        }),
      });

      const body = await response.json();

      if (body.error === null) {
        alert('Customer created');
        sessionStorage.setItem('user', name);
        window.location.reload();
      } else {
        setError(body.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop</h1>
        <h3>Register</h3>
      </header>

      <body>
        <form>
          <div className="authorization">
            <input
              required
              type="text"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              required
              type="text"
              placeholder="surname"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />

            <input
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              required
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" onClick={register}>
              Register
            </button>
            {error && <p className="error">{error}</p>}
            <span className="span">
              "If you have an account, please login" <Link to="/login">Login</Link>{' '}
            </span>
          </div>
        </form>
        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
      </body>
    </div>
  );
}

export default Register;

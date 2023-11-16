import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginEmail: email,
        loginPassword: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setLoginStatus('Prisijungimas sėkmingas');
          navigate('/');
        } else {
          setLoginStatus('El. paštas arba slaptažodis neteisingi.');
        }
      })
      .catch((error) => {
        console.error('Klaida prisijungiant:', error);
        setLoginStatus('Įvyko klaida prisijungiant. Patikrinkite prisijungimo duomenis ir bandykite dar kartą.');
      });
  };

  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop</h1>
        <h3>Login</h3>
      </header>

      <body>
        <form>
          <div className="authorization">
            <input
              autoComplete="off"
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              autoComplete="off"
              required
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" onClick={login}>
              Prisijungti
            </button>
            <p className="error">{loginStatus}</p>
            <span className="span">
              "If you have account, please login" <Link to="/register">Register</Link>{' '}
            </span>
          </div>
          <footer className="bg-dark text-white text-center py-2">
            <p>&copy; 2023 Web Shop</p>
          </footer>
        </form>
      </body>
    </div>
  );
}

export default Login;

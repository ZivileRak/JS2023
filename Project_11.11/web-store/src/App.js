import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'; // Pasirinkite BrowserRouter arba HashRouter, priklausomai nuo jūsų poreikių

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './headpages/styles.css';

import Home from './headpages/Home';
import Register from './headpages/Register';
import Product from './headpages/Product';
import ShopCart from './headpages/ShopCart';
import Login from './headpages/Login';
import Navbar from './Components/navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="shopcart" element={<ShopCart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

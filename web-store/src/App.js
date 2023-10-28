import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import UserAccount from './UserAccount';
import Navigation from './Navigation';


function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <Routes>
          <Route exact path="/" component={ProductList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/user-account" component={UserAccount} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

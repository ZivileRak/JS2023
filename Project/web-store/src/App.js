import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import './styles.css';
/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';*/
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import UserAccount from './UserAccount';
import Navigation from './Navigation';

import Navbar from './Components/Navbar/Navbar';
import Product from './HeadPages/Product';
import Login from './HeadPages/Login';

function App() {
  const [Data, setData]= useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
  },[])

  return (
  <div>
    <table>
      <thead>
        <th>Produc tId </th>
        <th> Product Name</th>
        <th> Product Description</th>
        <th> Quantity</th>
        <th> Price</th>

      </thead>
      <tbody>
        {Data.map((d,i)=> (
          <tr key ={i}>
            <td>{d.ProductId}</td>
            <td>{d.ProductName}</td>
            <td>{d.ProductDescription}</td>
            <td>{d.Quantity}</td>
            <td>{d.Price}</td>
          </tr>
        ))}
      </tbody>

     
    </table>
    
    
  </div>
  );
}
export default App;

/*
function App() {
  const [backendData, setBackendData]= useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      response=>response.json()
    ).then(
      data =>{
        setBackendData(data)
      } 
    )

  },[])

  return (
  <div>
    {(typeof backendData.users==='undefined') ? (
      <p>No data</p>
    ):(
      backendData.users.map((user,i) => (
        <p key ={i}>{user}</p>
      ))
    )

    }
    
  </div>
  );
}
export default App;*/

/*function App() {
  return (
  <div>
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path='/' element={<home/>}/>  
      <Route path = "/product" element ={<Product/>}/>
        <Route path = 'productId' element={<Product/>}/>
    <Route path='/' element={<home/>}/> 
   
 
    <Route path='/login' element={<Login/>}/>

    </Routes>

    </BrowserRouter>
  </div>
  );
}
export default App;*/

  /*return (--   //Ingos info
    <Router>
      <div>
        <Navbar/>
     -- <Navigation />
       <Routes>
          <Route exact path="/" component={ProductList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/user-account" component={UserAccount} />
        </Routes>
      </div>
    </Router>
  );
}*/



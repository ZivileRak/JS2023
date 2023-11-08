
import React, {useEffect, useState} from 'react';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,

} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import './headpages/styles.css';


import Home from "./headpages/Home";
import Register from "./headpages/Register";
import Product from "./headpages/Product";
import ShopCart from "./headpages/ShopCart";
import Login from "./headpages/Login";
import Navbar from "./Components/navbar/Navbar";
/*import Footer from "./Components/navbar/Footer";*/



const Layout= ()=> {
  return(
    <>
      <Navbar/>
      <Outlet/>
      
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/shopcart",
        element:<ShopCart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }

    ]    
  },

  {
    path: "/product",
    element: <div>Product</div>,
  },
  {
    path: "/shopcart",
    element: <div>ShopCartt</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
]);

function App() {
  return (
  <div>
  
    < RouterProvider router ={router}></RouterProvider>

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




/*
import React, {useEffect, useState} from 'react';
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

export default App;*/
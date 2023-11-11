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
    <shopContextProvider>
  
    < RouterProvider router ={router}></RouterProvider>
    </shopContextProvider>
  </div>
  );
}



export default App;

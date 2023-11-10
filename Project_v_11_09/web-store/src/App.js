import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './headpages/styles.css';
import Home from './headpages/Home';
import Register from './headpages/Register';
import Product from './headpages/Product';
import ShopCart from './headpages/ShopCart';
import Login from './headpages/Login';
import Navbar from './Components/navbar/Navbar';
import Cart from '/workspaces/JS2023/Project_v_11_09/web-store/src/Components/Cart.js'
import ProductList from '/workspaces/JS2023/Project_v_11_09/web-store/src/Components/ProductList.js'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product',
        element: <ProductList />,
      },
      {
        path: '/shopcart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

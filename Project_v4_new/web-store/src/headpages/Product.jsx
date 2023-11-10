import React, { useState, useEffect } from 'react'
import './styles.css';



const Product= () => {
  const [Data, setData]= useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
  },[])

  return (
    
  <div>

<header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop </h1>
        <h3>Enjoy SPA at home </h3>  
      </header>

    <table className="container mt-4">
      <thead>
      
        <th> Product Name</th>
        <th> Product Description</th>
     
        <th> Price</th>
    
      </thead>
      
      <tbody>
      
       
        {Data.map((d,i)=> (
          <tr key ={i}>
            
            <td>{d.ProductName}</td>
            <td>{d.ProductDescription}</td>

            <td>{d.Price}</td>
            <button className="btn btn-primary">Order</button>
       
          </tr>
          
        ))}
      </tbody>
     
    </table>
 
        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer> 
  </div>
  );
}

export default Product;

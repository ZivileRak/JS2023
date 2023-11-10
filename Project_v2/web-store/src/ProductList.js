import React, { useState, useEffect } from 'react'
import './styles.css';


const Product1 = () =>{
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
export default Product1;



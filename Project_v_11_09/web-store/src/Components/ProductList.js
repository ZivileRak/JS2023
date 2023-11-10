import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Užkrauti produktus iš serverio
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const addToCart = (productId) => {
    axios.post('http://localhost:5000/api/add-to-cart', { productId })
      .then((response) => {
        console.log(response.data);
        // Atnaujiname krepšelį su naujais duomenimis iš serverio
        setCart(response.data);
        setMessage('Product added to the cart');
        // Po kelių sekundžių išvalyti pranešimą
        setTimeout(() => setMessage(''), 3000);
      })
      .catch((error) => {
        console.error('Klaida pridedant į krepšelį:', error);
      });
  };

  return (
    <div>
      <h2>Produktų sąrašas</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={`src/Components/ProductPicture/product${product.id}.png`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.Price} €</p>
            <button onClick={() => addToCart(product.id)}>Pridėti į krepšelį</button>
          </li>
        ))}
      </ul>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductList;

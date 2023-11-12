import React, { useState, useEffect } from 'react';
import './styles.css'; // Stilių failas

const Product = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/product')
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((error) => console.log(error));
  }, []);

  const addToCart = (item) => {
    fetch('http://localhost:5000/addToCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.message);

            // Atsiunčiame naują krepšelio turinį
            fetch('http://localhost:5000/getCart')
                .then((res) => res.json())
                .then((data) => {
                    console.log('Naujas krepšelio turinys:', data);
                    setCartItems(data);
                })
                .catch((error) => console.error('Klaida gaunant krepšelio turinį:', error));
        })
        .catch((error) => console.error('Klaida pridedant prekę į krepšelį:', error));
};

  const handleOrderClick = (item) => {
      // Pasiunčiame prekės informaciją į krepšelio funkciją
      addToCart(item);
  };


  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop</h1>
        <h3>Enjoy SPA at home</h3>
      </header>

      <table className="container mt-4">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d.ProductID}>
              <td>{d.ProductName}</td>
              <td>{d.ProductDescription}</td>
              <td>{d.Price}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleOrderClick(d)}>
                  Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Web Shop</p>
      </footer>
    </div>
  );
};

export default Product;

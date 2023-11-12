import React, { useState, useEffect } from 'react';
import './styles.css';

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

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

  const [isCartNotEmpty, setIsCartNotEmpty] = useState(true);

useEffect(() => {
  fetch('http://localhost:5000/getCart')
    .then((res) => res.json())
    .then((data) => {
      setCartItems(data);
      setIsCartNotEmpty(data.length === 0);
    })
    .catch((error) => console.error('Klaida gaunant krepšelio turinį:', error));
}, [cartItems]);

  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop</h1>
        <h3>Enjoy SPA at home</h3>
      </header>

      <main className="container mt-4">
        <section id="shopping-cart" className="text-center">
          <h2 className="mb-4">{isCartNotEmpty ? "Your Cart is Empty" : "Your Cart"}</h2>
          {cartItems.length === 0 ? (
            <p>The Cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>Pašalinti</button>
                  </li>
                ))}
              </ul>
              <p>Bendra suma: ${getTotalPrice()}</p>
            </>
          )}
        </section>
        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
      </main>
    </div>
  );
};

export default ShopCart;

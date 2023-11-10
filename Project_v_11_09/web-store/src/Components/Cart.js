import React, { useState, useEffect } from 'react';
import './Cart.css'; // Importuojame stilių failą

const Cart = ({ userId }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Užkrauti krepšelio turinį iš serverio
        fetch(`http://localhost:5000/cart/${userId}`)
            .then(response => response.json())
            .then(data => setCart(data))
            .catch(error => console.error('Error:', error));
    }, [userId]);

    return (
        <div>
            <h2>Krepšelis</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.product_name} - {item.quantity} vnt.
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

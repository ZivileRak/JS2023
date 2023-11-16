import React, { useState } from 'react';
import './styles.css'; // Include the common styles
import './cart.css'; // Include the common styles for the shopping cart

const ShopCart = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0, 0]); // Initial count state for each item
    const prices = [1000, 5500, 8950, 700, 780]; // Prices for each item
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleIncrement = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const handleDecrement = (index) => {
        const newCounts = [...counts];
        newCounts[index] = Math.max(newCounts[index] - 1, 0);
        setCounts(newCounts);
    };

    const handleRemove = (index) => {
        const newCounts = [...counts];
        newCounts[index] = 0;
        setCounts(newCounts);
    };

    const handleRemoveAll = () => {
        setCounts([0, 0, 0, 0, 0]);
    };

    const calculateSubtotal = () => {
        return counts.reduce((total, count, index) => total + count * prices[index], 0);
    };

    const calculateTotalItems = () => {
        return counts.reduce((total, count) => total + count, 0);
    };

    const handleCheckout = () => {
        // Create an object with order information
        const orderData = {
            items: counts.map((count, index) => ({ product: `Product ${index + 1}`, quantity: count })),
            total: calculateSubtotal(),
        };

        // Simulate sending order information to the server
        // In a real application, I would send a POST request to server
        console.log('Simulating order placement:', orderData);

        // Set the orderPlaced state to true
        setOrderPlaced(true);
    };

    return (
        <div className="shopping-cart">
            <div className="Header">
                <h3 className="Heading">Shopping Cart</h3>
                <h5 className="Action" onClick={handleRemoveAll}>{!orderPlaced && "Remove all"}</h5>
            </div>

            {orderPlaced ? (
                <div className="order-placed-message">
                    Your order is accepted! About order status you will be informed by email.
                </div>
            ) : (
                <>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div className="Cart-Items" key={index}>
                            <div className="image-box">
                                <img src={`/product${item}.png`} style={{ height: "120px" }} alt={`Product ${item}`} />
                            </div>
                            <div className="about">
                                <h1 className="title">Hydromassage Pool SPA {item}</h1>
                            </div>
                            <div className="counter">
                                <div className="btn" onClick={() => handleIncrement(index)}>+</div>
                                <div className="count">{counts[index]}</div>
                                <div className="btn" onClick={() => handleDecrement(index)}>-</div>
                            </div>
                            <div className="prices">
                                <div className="amount">${prices[index] * counts[index]}</div>
                                <div className="remove" onClick={() => handleRemove(index)}><u>Remove</u></div>
                            </div>
                        </div>
                    ))}

                    <hr />

                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{calculateTotalItems()} items</div>
                            </div>
                            <div className="total-amount">${calculateSubtotal().toFixed(2)}</div>
                        </div>
                        <button className="button" onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ShopCart;

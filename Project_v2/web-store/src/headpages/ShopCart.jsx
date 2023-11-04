import React, { useState } from 'react'
import './styles.css';


    const ShopCart= () => {
return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>Maža internetinė parduotuvė</h1>  // nav istrinta

      </header>

      <main className="container mt-4">
        <section id="shopping-cart" className="text-center">
          <h2 className="mb-4">Jūsų Krepšelis</h2>
          <p>Čia galite peržiūrėti prekes, kurias pridėjote į savo krepšelį.</p>
        </section>
        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>
        
      </main>


    </div>
  );
}

export default ShopCart;

/*        <nav className="mt-3">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SPA equitment</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Shopping cart</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          </ul>
        </nav>*/
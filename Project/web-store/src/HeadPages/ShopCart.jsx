import React, { useState } from 'react'
import './styles.css';


    const ShopCart= () => {
return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>Maža internetinė parduotuvė</h1>
        <nav className="mt-3">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#">Namai</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Spa Vonios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Krepšelis</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Vartotojo Paskyra</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mt-4">
        <section id="shopping-cart" className="text-center">
          <h2 className="mb-4">Jūsų Krepšelis</h2>
          <p>Čia galite peržiūrėti prekes, kurias pridėjote į savo krepšelį.</p>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Maža internetinė parduotuvė</p>
      </footer>
    </div>
  );
}

export default ShopCart;
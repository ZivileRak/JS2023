import React, { useState, useEffect } from 'react'
import './styles.css';



const Product= () => {
return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop </h1>
        <h3>Enjoy SPA at home </h3>
        /*<nav className="mt-3">
          <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SPA equitment</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Shopping cart</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          </ul>
        </nav>*/
      </header>

      <main className="container mt-4">
        <section id="product-list">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Hydromassage Pool SPA “Relax”</h2>
                  <p className="card-text">Unique new spa pool with 3 full laying seats and 2 semi-laying seats.</p>
                  <button className="btn btn-primary">Order</button>
                </div>
              </div>
            </div>
        </div>
            {/* Galite pridėti daugiau produktų čia */}
            <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Hydromassage Pool SPA "Recharge"</h2>
                  <p className="card-text">Classic-style round spa pool for up to 5 people</p>
                  <button className="btn btn-primary">Order</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Hydromassage Pool SPA "Activity"</h2>
                  <p className="card-text">Compact swimming spa with 3 massage seats and an adjustable river swimming system that allows you to swim energetically while keeping your head comfortably above water level.</p>
                  <button className="btn btn-primary">Order</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Web shop</p>
      </footer>
    </div>
  );
}

export default Product;



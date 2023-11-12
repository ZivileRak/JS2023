import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import frontfoto from '../Components/ProductPicture/frontfoto.png';

const Home = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>SPA equipment webshop </h1>
        <h3>Enjoy SPA at home </h3>
      </header>

      <body>
        <div>
          <p>
            Having a spa at home has many advantages for those who decide to build one. Not only obvious benefits for
            health and beauty, but also for the comfort and well-being it brings to your home.
          </p>
          <p>The added value and appreciation it can bring to your home is also something to take into account when setting up a spa at home.</p>

          <span className="span">
            "Please review the product list" <Link to="/product">SPA equipment</Link>
          </span>
        </div>
      </body>

      <section>
        <div className="foto">
          <img src={frontfoto} alt="" />
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Web Shop</p>
      </footer>
    </div>
  );
};

export default Home;

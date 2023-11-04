import React, { useState } from 'react'

import './styles.css';
import frontfoto from '../Components/ProductPicture/frontfoto.png';




const Home= () => {
    return(
        
        <div header className="bg-dark text-white text-center py-3">
        <h1>SPA equitment webshop </h1>
            <h3>Enjoy SPA at home </h3>
            

<div>

         <body> 
            <p>Having a spa at home has many advantages for those who decide to build one. Not only obvious benefits for health and beauty, but also for the comfort and well-being it brings to your home. The added value and appreciation it can bring to your home is also something to take into account when setting up a spa at home.</p>
         Having a spa at home has many advantages for those who decide to build one. Not only obvious benefits for health and beauty, but also for the comfort and well-being it brings to your home. The added value and appreciation it can bring to your home is also something to take into account when setting up a spa at home.
            
            </body> 
            <section>
         <div className="foto">
         <img src={frontfoto} alt= ""/> 
         
         </div>  
         </section>   
        </div>

        <footer className="bg-dark text-white text-center py-2">
          <p>&copy; 2023 Web Shop</p>
        </footer>

        </div>
    )
}
export default Home

 /*<img src={FrontFoto} alt= ""/>*/
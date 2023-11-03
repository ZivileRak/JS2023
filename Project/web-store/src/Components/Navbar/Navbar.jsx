import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar =() => {
    const[menu, setMenu]= useState("Home ")
    return(
        <div className='navbar'>
        <ul className ="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link to= '/' >Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("spa pool")}} ><Link to = 'spa pool'> SPA Pool</Link>{menu==="spa pool"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shopping cart")}} > <Link to = 'Shopping cart'> Shopping cart</Link> {menu==="shopping cart"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("user login")}} ><Link to = 'User Login'> User Login</Link>{menu==="user login"?<hr/>:<></>}</li>
        </ul>

        </div>

    )
}
export default Navbar
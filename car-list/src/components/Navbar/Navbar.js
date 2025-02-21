import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
//         <ul>
//   <li><a class="active" href="#home">Home</a></li>
//   <li><a href="#news">News</a></li>
//   <li><a href="#contact">Contact</a></li>
//   <li><a href="#about">About</a></li>
// </ul>

      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    
    );
}
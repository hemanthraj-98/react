import React from "react";
import './Profilecard.css';
// import logo from './pic1.jpg';
import logo from '../../johnwick.jpg';


export default function Profilecard(){

    return(
        <div>
        <h2 className="text-center">User Profile Card</h2>
        
        <div class="card">
          <img src={logo} alt="John"  />
          <h1>John Doe</h1>
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div>
            <a href="#"><i class="fa fa-dribbble"></i></a> 
            <a href="#"><i class="fa fa-twitter"></i></a>  
            <a href="#"><i class="fa fa-linkedin"></i></a>  
            <a href="#"><i class="fa fa-facebook"></i></a> 
          </div>
          <p><button>Contact</button></p>
        </div>
        </div>
    );
}
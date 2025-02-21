import React from "react";
import './Slideshow.css';
import picture1 from '../../slide1.jpg';
import picture2 from '../../slide2.jpg';
import picture3 from '../../slide3.jpg';


export default function Slideshow(){
    return(
        <div>
            {/* <h2 style="text-align:center">Multiple Slideshows</h2> */}

<p>Slideshow 1:</p>
<div className="slideshow-container">
  <div className="mySlides1">
    <img src={picture1} />
  </div>

  <div className="mySlides1">
    <img src={picture2}/>
  </div>

  <div className="mySlides1">
    <img src={picture3}/>
  </div>

  <a className="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
  <a className="next" onclick="plusSlides(1, 0)">&#10095;</a>
</div>

        </div>
    );
}
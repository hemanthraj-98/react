import React from "react";
import './About.css';

export default function About(){
return(
    <div>
        <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

<div className="parallax"></div>

<div className="bg-parallax">
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
    </div>
);

}

import './ChickenParallax.css';
import fence from '../src/assets/fence.png'; 
import grass from './assets/grass.png'; 
import coop from './assets/coop.png'; 
import chicken from './assets/chicken.png'; 
import leafL from './assets/leafL.png'; 
import leafR from './assets/leafR.png'; 
import {useEffect, useState} from "react"



function ChickenParallax () {
    const [offsetY,setoffsetY] = useState(0)
  
  const handleScroll =() =>{
    setoffsetY(window.scrollY)
  }
useEffect(() =>{
    window.addEventListener('scroll',handleScroll)
return () =>{
    window.removeEventListener('scroll',handleScroll)
}
},[])

    return (
    <header className="header">
      <nav style={{ transform: `translateY(${offsetY * 1}px)` }}>
        <h2>Logo</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div id="parallaxContainer">
        <img src={fence} className="parallaxLayer" style={{ transform: `translateX(${offsetY * 0.2}px)` }}/>
        <h1 className="parallaxLayer"style={{ transform: `translateX(${offsetY * 1}px)` }}>Welcome to the Farm</h1>
        <img src={grass} className="parallaxLayer"/>
        <img src={coop} className="parallaxLayer" />
        <img src={chicken} className="parallaxLayer" style={{ transform: `translateY(${offsetY * 2.9}px)` }} />
        <img src={leafL} className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.5}px)` }} />
        <img src={leafR} className="parallaxLayer" style={{ transform: `translateX(${offsetY * 0.5}px)` }} />
      </div>
    </header>
  );
}

export default ChickenParallax;





// import React from "react";
// import '../src/ChickenParallax.css'

// function ChickenParallax  () {

// return (
// <Header>
// <nav>
//     <H2>Logo</H2>
//     <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Service</li>
//     <li>Contact</li>
//     </ul>
// </nav>
// <div id="parallaxLayer">
// <div id="parallaxContainer">
//         <img src={fence} className="parallaxLayer" alt="Fence" />
//         <h1 className="parallaxLayer">Welcome to the Farm</h1>
//         <img src={grass} className="parallaxLayer" alt="Grass" />
//         <img src={coop} className="parallaxLayer" alt="Coop" />
//         <img src={chicken} className="parallaxLayer" alt="Chicken" />
//         <img src={leafL} className="parallaxLayer" alt="Leaf Left" />
//         <img src={leafR} className="parallaxLayer" alt="Leaf Right" />
//       </div>
// </div>
// </Header>
// )
// }
// export default Header;
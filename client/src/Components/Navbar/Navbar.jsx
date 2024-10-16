import React, { useState } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbar.css";
import logo from '../../assets/logo_write.png'
import logo_1 from '../../assets/logo_only.png'
// import { Link } from 'react-router-dom';
// import logo from "../assets/favicon-32x32.png";
const Navbar = () => {
   const [clicked, setClicked] = useState(false);

   // Define the click handler
   const handleClick = () => {
     setClicked(!clicked);
   };
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <img src={logo_1} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i class={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;

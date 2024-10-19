import React, { useState } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbar.css";
import logo from '../../assets/logo_write.png'
import logo_1 from '../../assets/logo_only.png'
import { Link } from 'react-router-dom';
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
        <Link onClick={window.scrollTo(0,0)} to = '/'>
        <img src={logo_1} alt="" />
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i class={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button className="sign-up">Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;

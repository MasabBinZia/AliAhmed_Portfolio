import "./NavBarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
const [click,setClick] =useState(false);
const handleClick =()=>setClick(!click);

const[color,seColor]=useState(false);
const changeColor=()=>{
  if(window.scrollY>=100){
    seColor(true);
  }else{
    seColor(false);
  }
};
window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg":"header"}>
      <Link to="/">
        <h1>My Website </h1>
      </Link>
      <ul className={click ? "nav-menu active" :
    "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Experience</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}  />
        ):(<FaBars size={20} style={{color:"#fff"}}  />
        )}
         
      </div>
    </div>
  )
}

export default NavBar

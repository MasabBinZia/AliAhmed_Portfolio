import "./MainimgStyles.css";

import React from 'react'

import IntroImg from "../assets/main.jpg";
import "./MainimgStyles.css"
import { Link } from "react-router-dom";

const Mainimg = () => {
  return  <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI,I'M Ali Ahmed.</p>
        <h1>Blockchain Developer.</h1>
        <div>
            <Link to="/project" className="btn">Experience</Link>
            <Link to="/contact" className=" btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
  
}

export default Mainimg

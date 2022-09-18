import "./AboutContentStyles.css"
import { Link } from 'react-router-dom';
import React from 'react'
import Abt1 from "../assets/abt1.jpg"
import Abt2 from "../assets/abt2.jpg"

const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Bachelor's in computer science and Certified Blockchain Developer,
       developing the Applications in MERN. Experience in developing Decentralized 
       Blockchain applications using Ethereum with a vast knowledge of decentralized 
      finance, decentralized exchanges and cryptocurrencies.</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={Abt1} className="img"
                   alt="true"  />
            </div>
            <div className="img-stack bottom">
                <img src={Abt2} className="img"
                   alt="true"  />
            </div>
        </div>
    </div>
  </div>;
  
}

export default AboutContent

import "./FooterStyles.css"
import React from "react"
import { Link } from 'react-router-dom';

import {FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter,FaLinkedin} from "react-icons/fa"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        <div>
                            <p>Karachi,Pakistan</p>
                        </div>
                        <div className="phone">
                            <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        +92-33343434
                        </h4>
                        </div>

                        <div className="Email">
                            <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        extricateshareware@gmail.com
                        </h4>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4>About ME</h4>
                    <p>
                        Hey!It's Me Ali Ahmed ,
                          I’m interested in Blockchain development.
                    </p>
                    <div className="social">
                    <Link to="linkedin.com/in/ali-ahmed-17a828203">         
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                <Link to="https://www.instagram.com/_ali05ahmed/">
                    <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                <Link to="github.com/ali-05-ahmed ">
                    <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;
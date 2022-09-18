import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Mainimg2 from '../components/Mainimg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Mainimg2 heading="ABOUT" text1="My Area of programming expertise are :" 
      text2="solidity"
      text3="web3"
      text4="javascript"
      text5="react" 
      text6="redux" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About

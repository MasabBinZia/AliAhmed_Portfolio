import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Mainimg2 from '../components/Mainimg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <Mainimg2 heading="Experience." text="Here is my Work Experience.
      " />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project

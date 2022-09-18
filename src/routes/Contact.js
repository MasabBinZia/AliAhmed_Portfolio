import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Mainimg2 from '../components/Mainimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Mainimg2 heading="Contact." text="Let's Have a Chat!" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact

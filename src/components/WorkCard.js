import "./WorkCardStyle.css"
import React from 'react'
import pro1 from "../assets/pro1.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <h2 className="project-title">{props.title} </h2>
    <div className="pro-details">
        <p className="date">{props.text}</p>
        <p className="date">{props.text1}</p>
        <p className="date">{props.text2}</p>
        <h3 className="skills-heading">{props.text3}</h3>
        <p  className="skills-para">{props.text4} </p>
        <p  className="skills-para">{props.text5}</p>
    </div>
</div>
  )
}




export default WorkCard

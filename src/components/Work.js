import "./WorkCardStyle.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import React from 'react'
import pro1 from "../assets/pro1.jpg"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Work Experience</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind) => {
            return (
                <WorkCard 
                key={ind}
                title={val.title}
                text={val.text}
                text1={val.text1}
                text2={val.text2}
                text3={val.text3}
                text4={val.text4}
                text5={val.text5}
                text6={val.text6}
                />
            )
        })}


      </div>
    </div>
  )
}




export default Work

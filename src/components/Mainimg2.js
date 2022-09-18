import "./Mainimg2Styles.css"

import React, { Component } from 'react'

class Mainimg2 extends Component {
    render(){
        return (
            <div className="main-img">
              <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
                <p className="text1">{this.props.text1}</p>
                <p className="text2">{this.props.text2}</p>
                <p className="text3">{this.props.text3}</p>
                <p className="text4">{this.props.text4}</p>
                <p className="text5">{this.props.text5}</p>
                <p className="text6">{this.props.text6}</p>
              </div>
            </div>
          )
    }
  
}

export default Mainimg2

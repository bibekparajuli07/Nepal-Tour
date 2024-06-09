// import React from 'react'
import "./Destination.css"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner3.jpg"
const DesinationData = (props) => {
  return (
    <div>
         <div className={props.className}>
            <div className="destext">
                  <h2>{props.heading}</h2>
                   <p>{props.text}</p>
            </div>
            <div className="imag">
                <img src={props.img1} alt="img" />
                <img src={props.img2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DesinationData
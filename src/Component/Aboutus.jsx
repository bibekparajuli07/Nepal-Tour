// import React from 'react'
import "./Aboutus.css"
import abtimg from "../assets/nepal.png"
const Aboutus = () => {
  return (
    <div className="container">
        <img src={abtimg} alt="" />
       <div className="content">
       <h1>Our History</h1>
        <p>Nepal Tour was established as a subsidiary of Konnect Lead Pvt Ltd, leveraging the companys extensive experience in IT solutions, HR, and finance to create a seamless and enriching travel experience. Since its inception, Nepal Tour has aimed to offer unique and immersive travel experiences, showcasing the rich cultural heritage, natural beauty, and diverse traditions of Nepal. </p>
        <h1>Our Mission</h1>
        <p>Our mission at Nepal Tour is to provide unforgettable travel experiences that celebrate the beauty, culture, and history of Nepal. We strive to create personalized itineraries that cater to the unique interests and needs of our clients, ensuring every journey is enriching and enjoyable. </p>
        <h1>Our Vision</h1>
        <p>Our vision is to be the leading travel company in Nepal, recognized for our innovative approach, exceptional service, and commitment to sustainability. We aspire to promote Nepal as a premier travel destination while preserving its natural and cultural heritage for future generations. </p>
       </div>
    </div>
  )
}

export default Aboutus
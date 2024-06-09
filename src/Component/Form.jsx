import "./Form.css"
// import React from 'react'

const Form = () => {
  return (
    <div className="container">
        <div className="img">
           <img src="src\assets\envelopes-6919301_1280.jpg" alt="" />
           <h3>Contact</h3>
        </div>
        <div className="body">
        <div className="from-container">
        <h1>Send a message to us</h1>
        <form>
          <input placeholder="Enter Name"/>
          <input placeholder="Enter Email"/>
          <input placeholder="Enter Subject"/>
          <textarea placeholder="Enter Message" rows="5"/>
          <button>Send Message</button>
        </form>
        </div>
        <div className="content">
        <h1>Get in touch</h1>
        <p>We provide quality service and best guide</p>
          <div className="contact">
             <h4>Kathmandu,Nepal Branch:</h4>
             <br/>
             <h6>Contact Person: raj shrestha</h6>
             <h6>Phone: +977-01-XXXXXX</h6>
              <h6>Email: Nepal@gmail.com</h6>
              <h6>Gaushala, Kathmandu 44600</h6>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Form
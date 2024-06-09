// import React from 'react'
import Destination from "../Component/Destination";
import Image from "../Component/Image";
// import Navbar from "../Component/Navbar";
import Trip from "../Component/Trip";
import banner from "../assets/About.jpeg"

const Home = () => {
  return (
    <div>
      
      <Image 
        cName="image"
        src={banner}
        alt="Travel destination"
        title="Your Journey, Your Story"
        text="Choose your Plan"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination/>
      <Trip/>
    </div>
  );
}

export default Home;

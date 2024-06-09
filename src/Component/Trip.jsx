// import React from 'react'
import "./Trip.css"
import Tripdata from './Tripdata'
import Image from '../assets/banner1.jpg'
const Trip = () => {
  return (
    <div>
        <div className="headtext">
        <h1>Recent Trips</h1>
        <p>You can discober unique destination using Google Maps</p>
        </div>
        <div className="tripcard">
        <Tripdata
            image={Image}
            heading="Tour to Mustang"
            text="The word “Mustang” comes from Tibetan and means “Plain of Hope”. On the Upper Mustang-Lomanthang tour, Nepal’s most remote regions are completely cut off from the rest of the country. Despite its remote location, Mustang attracts thousands of tourists each year of Mustang tour.   ."     
        />
        <Tripdata
            image="https://cdn.pixabay.com/photo/2020/06/04/18/02/boat-5259883_1280.jpg"
            heading="Tour to Pokhara"
            text="Nestled in the heart of Nepal, Pokhara is a mesmerizing city known for its natural beauty and adventure opportunities. One of the most popular locations in Pokhara is Phewa Lake, a tranquil and scenic spot that captures the essence of the region’s charm.
Phewa Lake, the second-largest lake in Nepal, offers a serene escape with its crystal-clear waters."     
        />
        <Tripdata
            image="https://www.shrineyatra.com/wp-content/uploads/2022/11/Nagarkot.jpg"
            heading="Tour to Nagarkot"
            text="The small hill station of Nagarkot is one of the best places in Nepal to watch the Himalayan mountain ranges. Ever since it was famous, international tourists visit Nagarkot to have a glimpse of the world’s tallest mountains. The views of towering mountains such as Everest, Manaslu, Annapurna, Langtang, Jugal, Numbur, Ganesh Himal, and the Rolwaling mountain ranges from Nagarkot are a memorable experience."     
        />
        </div>
    </div>
  )
}

export default Trip
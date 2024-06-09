// import React from 'react'
import "./Destination.css"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner3.jpg"
import pokh1 from "../assets/pokh.jpg"
import pokh2 from "../assets/pokh2.jpg"
import DesinationData from "../Component/DesinationData"
const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opporunity to see a lot</p>
        <DesinationData 
        className="firstdes"
        heading="Upper Mustang-lomanthang Tour"
        text="The word “Mustang” comes from Tibetan and means “Plain of Hope”. On the Upper Mustang-Lomanthang tour, Nepal’s most remote regions are completely cut off from the rest of the country. Despite its remote location, Mustang attracts thousands of tourists each year of Mustang tour. With the Upper Mustang-Lomanthang tour Package the visitors avoid the location’s remoteness and come to see the traditional Tibetan heritage and amazing views all around."
        img1={banner1}
        img2={banner2}/>
        <DesinationData 
        className="firstdes-reverse"
        heading="Pokhara Tour "
        text="At the heart of Pokhara lies the breathtaking Fewa Lake, a top destination for both locals and tourists alike. Surrounded by lush green hills and the majestic Annapurna range, Fewa Lake is a haven for nature enthusiasts and adventure seekers. The lake's tranquil waters offer a perfect setting for boating, with colorful wooden boats available for rent. A leisurely paddle on the lake not only provides a sense of peace but also offers stunning reflections of the snow-capped peaks, especially during sunrise and sunset."
        img1={pokh1}
        img2={pokh2}/>
    </div>

  )
}

export default Destination
import React from 'react';
import "./Travel.css";
import { data } from '../Json/Data';

const Travel = () => {
  return (
    <div className='container'>
       <div className="head">
        <img src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_1280.jpg" alt="hello" />
        <h3>Travel Plan</h3>
       </div>
       <div className="card">
       {
            data.map((d, index) => (
                <div className="semicontainer" key={index}>
                    <div className="image1">
                        <img src={d.image} alt={d.name} />
                    </div>
                    <div className="details">
                        <h4>{d.name}</h4>
                        <p><strong>Duration:</strong> {d.duration}</p>
                        <p><strong>Price:</strong> {d.price}</p>
                        <p><strong>Includes:</strong></p>
                        <ul>
                            {d.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  );
};

export default Travel;

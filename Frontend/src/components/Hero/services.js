import React from 'react'
import './hero.css';
import Location from './location.png';
import Satisfaction from './satisfaction.png';
import Time from './time.png';

function services() {
    return (
        <div className="container max-width">
               <ul className="services" style={{display: "flex"}}>
                    <li className="box">
                        <div className="inner">
                        <img src={Location} />
                        <h2>ANY PICKUP LOCATION</h2>
                        <p>lorem lipsumorem Ipsum is simply standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
                    </div></li>
                    <li className="box">
                    <div className="inner">
                    <img src={Time} />
                        <h2>24/7 BOOKING FACILITY</h2>
                        <p>lorem lipsumorem Ipsum is simply dummy text obeen ter since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
                    </div>
                    </li>
                    <li className="box">
                    <div className="inner">
                    <img src={Satisfaction} />
                        <h2>SATISFACTION GURANTEED</h2>
                        <p>lorem lipsumorem Ipsum is simply the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
                    </div>
                    </li>
               </ul>
        </div>
    )
}
export default  services;
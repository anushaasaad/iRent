import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect} from "react";
import bedroom1 from './bedroom1.jpg';
import bedroom2 from './bedroom1.jpg';
import facilities from './facilities.jpeg';
import gathering from './gathering.jpg';
import kitchen from './kitchen.jpg';
import appt from './appt.jpeg';
import villa from './villa.jpg';
import banglow from './banglow.jpg';
import hotel from './hotel.jpeg';
import Feedback from './feedback.js';
import './airbnb.css';
import Axios from "axios";
import {DropdownButton , Dropdown} from 'react-bootstrap';
function Airbnblist() {
    const navigate = useHistory();
    const [FetchData,setData] = useState("");
    useEffect(() => {
        fetching();
      }, []);
    const fetching = () => {
        Axios.post("http://localhost:5001/type")
            .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(FetchData);
            })
            .catch((err) => {
                console.log(err);
            });
        };
    const change = (type) => {
        if(type == 'banglow'){
            return banglow;
        }else if(type == 'house'){
            return appt;
        }else if(type == 'villa'){
            return villa;
        }else if(type == 'hotel'){
            return hotel;
        }
    }

    return (
        <div className="Airbnb">
                Why travellors love renting Vacation Rentals
            <div className="filter"></div>
            <div className='max-width'>
                <div className='design'>
                    <div className='boxes'>
                        <img src={gathering} />
                        <h3>Common space for gatherings</h3>
                    </div>
                    <div className='boxes'>
                        <img src={facilities} />
                        <h3>Facilities for groups</h3>
                    </div>
                    <div className='boxes'>
                        <img src={bedroom1} />
                        <h3>Private Bedrooms</h3>
                    </div>
                    <div className='boxes' style={{marginLeft:"20%"}}>
                        <img src={kitchen} />
                        <h3>Private Kitchen</h3>
                    </div>
                    <div className='boxes'>
                        <img src={bedroom2} />
                        <h3>Great for long stays</h3>
                    </div>
                </div>
                <div className='Airbnbtype'>
                    <div class="airbnbcontent">
                    <h1>Explore more Travel Rentals</h1>

                    {FetchData
                    ? FetchData.map((obj) => (
                        <div class="card">
                            <div class="box">
                            <img src={change(obj.type)}/>
                                    <div class="text"><a href={"http://localhost:3000/AirbnbList/" + obj.type} >{obj.type}</a></div>
                                    <p>{obj.count} properties</p>
                            </div>
                        </div>
                    ))
                : ""}
                        </div>
                    </div>
                <Feedback />
                </div>
            </div>
    )
}

export default Airbnblist;

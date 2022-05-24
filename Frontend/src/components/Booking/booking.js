import React from 'react';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';
import Header from '../../header.js'
function Booking() {
    const navigate = useHistory();
    const car = () => {
        navigate.push('./ManageCar');
    }
    const airbnb = () => {
        navigate.push('./ManageAirbnb');
    }
    return (
        <div>
            <Header />
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Button onClick={car}>Car</Button></li>
                                <li> <Button onClick={airbnb}>Airbnb</Button></li>
        
                            </ul>
                        </div>

            
    </div>
    </div>
    )
};
export default Booking;

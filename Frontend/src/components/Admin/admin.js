import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';
function Admin() {
    const navigate = useHistory();
    const car = () => {
        navigate.push('./Admincar');
    }
    const airbnb = () => {
        navigate.push('./AdminAirbnb');
    }
    return (
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Button onClick={car}>Car Module</Button></li>
                                <li> <Button onClick={airbnb}>Airbnb Module</Button></li>
        
                            </ul>
                        </div>

            
    </div>
    )
};
export default Admin;
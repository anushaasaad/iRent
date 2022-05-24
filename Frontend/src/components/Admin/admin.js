import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';
import Header from '../../header.js'
function Admin() {
    const navigate = useHistory();
    const car = () => {
        navigate.push('./Admincar');
    }
    const airbnb = () => {
        navigate.push('./AdminAirbnb');
    }
    return (
        <div>
            <Header />
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Button onClick={car}>Car Module</Button></li>
                                <li> <Button onClick={airbnb}>Airbnb Module</Button></li>
        
                            </ul>
                        </div>

    </div>
    </div>
    )
};
export default Admin;

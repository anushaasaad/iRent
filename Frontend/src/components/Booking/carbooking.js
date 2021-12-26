import React from 'react';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CarUpdate from './CarUpdate.js';
import Cardelete from './cardelete.js';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  }from "react-router-dom";

function Carbooking() {
    const navigate = useHistory();
    const move = () => {
        navigate.push('./Managebooking');
    }
    return (
        <Router>
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Link to="/Managebooking/carupdate"><Button>Car Booking</Button></Link></li>
                                <li><Link to="/Managebooking/cardelete"><Button>Delete Booking</Button></Link></li>
                                
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/Managebooking/carupdate">
                                <CarUpdate />
                            </Route>
                            <Route exact path="/Managebooking/cardelete">
                                <Cardelete />
                            </Route>
                    </Switch>

    <Button style={{margin:"30px"}} onClick={move}> Back to Manage</Button>
    </div>
    </Router>
    )
};
export default Carbooking;
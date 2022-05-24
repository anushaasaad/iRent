import React from 'react';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Airbnbupdate from './Airbnbupdate.js';
import Airbnbdelete from './airbnbdelete.js';
import Header from '../../header.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  }from "react-router-dom";

function Airbnbbooking() {
    const navigate = useHistory();
    const move = () => {
        navigate.push('./Managebooking');
    }
    return (
        <div>
            <Header />
        <Router>
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Link to="/Managebooking/airbnbupdate"><Button>Airbnb Booking</Button></Link></li>
                                <li><Link to="/Managebooking/airbnbdelete"><Button>Delete Booking</Button></Link></li>
                                
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/Managebooking/airbnbupdate">
                                <Airbnbupdate />
                            </Route>
                            <Route exact path="/Managebooking/airbnbdelete">
                                <Airbnbdelete />
                            </Route>
                    </Switch>

                    <Button style={{margin:"30px"}} onClick={move}> Back to Manage</Button>
    </div>
    </Router>
    </div>
    )
};
export default Airbnbbooking;

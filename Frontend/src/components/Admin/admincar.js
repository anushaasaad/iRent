import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import Insert from './insert.js';
import Delete from './delete.js';
import Details from './details.js';
import { useHistory } from 'react-router';
import Header from '../../header.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  }from "react-router-dom";

function Adminairbnb() {
    const navigate = useHistory();
    return (
        <div>
            <Header />
        <Router>
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Link to="/Admincar/details"><Button>Booking details</Button></Link></li>
                                <li><Link to="/Admincar/insert"><Button>Insertion</Button></Link></li>
                                <li><Link to="/Admincar/delete"> <Button>Deletion</Button></Link></li>
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/Admincar/insert">
                                <Insert />
                            </Route>
                            <Route exact path="/Admincar/details">
                                <Details />
                            </Route>
                            <Route path="/Admincar/delete">
                                <Delete />
                            </Route>
                    </Switch>
    </div>
    </Router>
    </div>
    )
};
export default Adminairbnb;

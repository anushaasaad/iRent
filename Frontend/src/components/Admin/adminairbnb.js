import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import Insert from './airbnbinsert';
import Delete from './airbnbdelete';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  }from "react-router-dom";

function Adminairbnb() {
    const navigate = useHistory();
    return (
        <Router>
        <div className="Admin">
            <div className="module">
                            <ul>
                                <li><Link to="/AdminAirbnb/insert"><Button>Insertion</Button></Link></li>
                                <li><Link to="/AdminAirbnb/delete"><Button>Deletion</Button></Link></li>
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/AdminAirbnb/insert">
                                <Insert />
                            </Route>
                            <Route path="/AdminAirbnb/delete">
                                <Delete />
                            </Route>
                    </Switch>

            
    </div>
    </Router>
    )
};
export default Adminairbnb;
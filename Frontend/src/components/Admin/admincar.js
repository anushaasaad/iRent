import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import Insert from './insert.js';
import Delete from './delete.js';
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
                                <li><Link to="/Admincar/insert"><Button>Insertion</Button></Link></li>
                                <li><Link to="/Admincar/delete"> <Button>Deletion</Button></Link></li>
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/Admincar/insert">
                                <Insert />
                            </Route>
                            <Route path="/Admincar/delete">
                                <Delete />
                            </Route>
                    </Switch>

            
    </div>
    </Router>
    )
};
export default Adminairbnb;
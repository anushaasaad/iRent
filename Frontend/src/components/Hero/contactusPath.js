import React from 'react'
import './hero.css';
import Contact from './contact.js';
import Follow from './follow.js';
import Visit from './visit.js';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  }from "react-router-dom";
function contactusPath() {
    return (
             <Router>
        <div id="container">

                    <header>
                    <h2>Contact us</h2>
                    <h1>Feel Free to<span> contact us</span></h1>
                    </header>
                    <footer>

                        <div className="skills">
                            <a href=""><h6>Need Help?</h6></a>
                            <ul>
                                <li><Link to="/contact">Call us</Link></li>
                                <li><Link to="/visit">Visit Us</Link></li>
                                <li><Link to="/follow">Follow us</Link></li>
        
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/visit">
                                <Visit />
                            </Route>
                            <Route path="/follow">
                                <Follow />
                            </Route>
                    </Switch>

                    </footer>
                </div>
                </Router>
    )
}
export default contactusPath;
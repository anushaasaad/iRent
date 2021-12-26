import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Hero from './components/Hero/hero.js';
import Main from './components/Rentcar/main.js';
import Contact from './components/learnmore/contactUs.js';
import Checkout from './components/Rentcar/checkout.js';
import Login from './components/Login/Login.js';
export default function app() {
    return (
        <div>
             <Router>
                    <Route exact path='/' element={<Hero />} />
                    <Route exact path='/List' element={<Main />} />
                    <Route exact path='/Contact' element={<Contact />} />
                    <Route exact path='/Checkout' element={<Checkout />} />
                    <Route exact path="/Login" element={<Login />}/>
                </Router>
        </div>
    )
}

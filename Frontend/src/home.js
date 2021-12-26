import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Route , Switch } from 'react-router';
import Hero from './components/Hero/hero.js';
import List from './components/Rentcar/main.js';
import Form from './components/learnmore/form.js';
import Checkout from './components/Rentcar/checkout.js';
import Login from './components/Login/Login.js';
import Signup from './components/Login/signup';
import Admin from './components/Admin/admin.js';
import Admincar from './components/Admin/admincar.js';
import Adminairbnb from './components/Admin/adminairbnb.js';
import Feedback from './components/Admin/feedback.js';
import { useHistory } from 'react-router';
import Airbnb from './components/Airbnb/airbnb.js';
import AirbnbList from './components/Airbnb/airlist.js';
import Airbnbcheckout from './components/Airbnb/aircheckout.js';
import Manage from './components/Booking/booking.js';
import Managecar from './components/Booking/carbooking.js';
import Manageairbnb from './components/Booking/airbnbbooking.js';

function Home() {
  const navigate = useHistory();
  const move =() =>{
    navigate.push('./List');
  }
   return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header section-header navbar">
        <div class="max-width">
          <h2><span>iR</span>ent</h2>
          </div>
      </header>
      <Navbar className="Navbar" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Collapse>
          <Nav className="menu">
                <a className="list" href="http://localhost:3000/"><span>Home</span></a>
                <a className="list" href="http://localhost:3000/List"><span>Cars</span></a>
                <a  className="list" href="http://localhost:3000/airbnb"><span>Airbnb</span></a>
                <a  className="list" href="http://localhost:3000/Managebooking"><span>Manage Bookings</span></a>
                </Nav>
              <ul class="navbar-nav ms-auto menu">
              <a href="http://localhost:3000/contact" className='list'><span>Contact us</span></a>
              <a href="http://localhost:3000/login" className="list"><span>Log in</span></a>
              <a href="http://localhost:3000/Signup"  className="list"><span>Sign up</span></a>
                </ul>
            </Navbar.Collapse>
      </Navbar>
      <Switch>
      <Route path="/" exact component={Hero} />
      <Route path='/List' exact component={List} />
      <Route path="/Contact" exact component={Form} />
      <Route path='/CarCheckout/:no_plate'>
        <Checkout />
      </Route>
      <Route path="/Login" exact component={Login} />
      <Route path="/Signup" exact component={Signup} />
      <Route path="/Admin" exact component={Admin} />
      <Route path="/Admincar" exact component={Admincar} />
      <Route path="/AdminAirbnb" exact component={Adminairbnb} />
      <Route path="/Feedback" exact component={Feedback} />
      <Route path="/Airbnb" exact component={Airbnb}/>
      <Route path="/AirbnbList/:type" exact component={AirbnbList}/>
      <Route path="/Airbnbcheckout/:idAirbnb" exact component={Airbnbcheckout}/>
      <Route path="/Managebooking" exact component={Manage}/>
      <Route path="/ManageCar" exact component={Managecar}/>
      <Route path="/ManageAirbnb" exact component={Manageairbnb}/>
      </Switch>

          </div>
    </BrowserRouter>
  );
}

export default Home;

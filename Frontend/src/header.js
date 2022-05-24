import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
export default function Header() {
    let navigate = useHistory();
    const name = JSON.parse(localStorage.getItem('user-info'));
    function Logout(){
        localStorage.clear();
        navigate.push('/');
        
    }
  return (
      <div>
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
                </Nav>
              <ul class="navbar-nav ms-auto menu">
                  {
                      localStorage.getItem('user-info') ?
                    <>
                    <a  className="list" href="http://localhost:3000/Managebooking"><span>Manage Bookings</span></a>
                    <a href="http://localhost:3000/contact" className='list'><span>Contact us</span></a>
                    </>
                    :
                    <>
                    <a href="http://localhost:3000/login" className="list"><span>Login</span></a>
                    <a href="http://localhost:3000/Signup"  className="list"><span>Sign up</span></a>
                    </>
                  }
              </ul>
              {
                  localStorage.getItem('user-info') ?

              <NavDropdown title={name && name.email} id="nav-dropdown">
                  <NavDropdown.Item onClick={Logout} >Logout</NavDropdown.Item>
              </NavDropdown>
              :
              null
}
            </Navbar.Collapse>
      </Navbar>
      </div>

  )
}

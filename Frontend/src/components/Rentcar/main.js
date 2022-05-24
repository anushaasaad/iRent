import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import List from './List.js';
import Header from '../../header.js'
function main() {
  return (

    <div>
      <Header />
      <List />
    </div>
  );
}

export default main;

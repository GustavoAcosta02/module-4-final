// Navbar.js

import React from "react";
import logo from './pexels-kindel-media-8566472.jpg';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
          <Link to = "/"><img src ={logo} className = "nav--logo"/></Link>
          <Link to="/">Home</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;


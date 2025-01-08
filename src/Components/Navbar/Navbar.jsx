import React from 'react'
import './Navbar.css'
import logo from '../../assets/purple-lilies-logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar-logo" />
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Trending</Link>
        <a href="https://www.google.com/maps/search/flower+shops+in+paris" 
          target="_blank" 
          rel="noopener noreferrer">Flowers Shops
        </a>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar
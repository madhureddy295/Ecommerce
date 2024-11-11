import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>WyseCom</h1>
        </div>
        
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/men-watches">Men Watches</a></li>
          <li><a href="/women-watches">Women Watches</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>

        <div className="nav-icons">
          <button className="icon-btn"><i className="fas fa-search"></i></button>
          <button className="icon-btn"><i className="fas fa-user"></i></button>
          <button className="icon-btn">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
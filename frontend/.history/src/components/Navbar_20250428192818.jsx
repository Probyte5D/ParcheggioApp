import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Parking
        </a>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          &#9776; {/* Questo è il simbolo dell'icona hamburger */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

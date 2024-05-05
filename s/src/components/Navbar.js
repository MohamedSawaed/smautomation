import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => onNavigate('/')}>
        SM.Automation
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li onClick={() => onNavigate('/')}>Home</li>
        <li onClick={() => onNavigate('/about')}>About</li>
        <li onClick={() => onNavigate('/services')}>Services</li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;

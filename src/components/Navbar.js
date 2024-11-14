import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch,  FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import AccountDropdown from './account-dropdown/dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Simple Product</h2>
      </div>

      {/* Desktop Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Search and Icons */}
      <div className="navbar-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>
        
        <AccountDropdown className="icon" title="Profile"/>
        <Link to="/cart" className="icon" >
        <FaShoppingCart className="icon shopping-cart" title="Cart"/>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;

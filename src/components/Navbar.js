import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Exclusive</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      <div className="icons">
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;

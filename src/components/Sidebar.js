// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Manage My Account</h3>
      <ul>
        <li><NavLink to="/account/profile">My Profile</NavLink></li>
        <li><NavLink to="/account/address-book">Address Book</NavLink></li>
        <li><NavLink to="/account/payment-options">My Payment Options</NavLink></li>
        <li><NavLink to="/account/orders">My Orders</NavLink></li>
        <li><NavLink to="/account/wishlist">My Wishlist</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;

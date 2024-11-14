// pages/MyWishlist.js
import React from 'react';
import Sidebar from '../Sidebar';

const MyWishlist = () => {
  return (
    <div className="account-container">
      <Sidebar />
      <div className="account-content">
        <h2>My Wishlist</h2>
        {/* Add logic to display and manage wishlisted items */}
      </div>
    </div>
  );
};

export default MyWishlist;

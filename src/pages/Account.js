// Account.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyProfile from '../components/Account/Profile';
import AddressBook from '../components/Account/Address-book';
import PaymentOptions from '../components/Account/Payment-option';
import MyWishlist from '../components/Account/Wishlist'; // Optional if you have a sidebar


function Account() {
  return (
    <div className="account-container">
      {/* Optional sidebar */}
      

      <div className="account-content">
        <Routes>
          <Route path="profile" element={<MyProfile />} />
          <Route path="address-book" element={<AddressBook />} />
          <Route path="payment-options" element={<PaymentOptions />} />
          <Route path="wishlist" element={<MyWishlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default Account;

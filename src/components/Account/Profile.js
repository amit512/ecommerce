// pages/MyProfile.js
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './style.css'

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Amit',
    lastName: 'Raut',
    email: 'rautamit930@gmail.com',
    address: 'nepalgunj-12',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    // Add logic to save changes
    alert('Changes saved');
  };

  return (
    <div className="account-container">
      <Sidebar />
      <div className="account-content">
        <h2>Edit Your Profile</h2>
        <form>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} />
          <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm New Password" onChange={handleChange} />
          <button type="button" onClick={handleSaveChanges}>Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

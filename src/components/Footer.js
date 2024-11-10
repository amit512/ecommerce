import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Exclusive</h3>
        <p>Best place to shop your products.</p>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <p>Contact Us</p>
        <p>FAQs</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

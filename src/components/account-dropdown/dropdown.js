import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaShoppingBag, FaTimesCircle, FaStar, FaSignOutAlt } from 'react-icons/fa';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown if clicking outside of it
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="account-dropdown" ref={dropdownRef}>
            <button className="account-btn" onClick={toggleDropdown}>
                <FaUser className="user-icon" />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to='/Account' className="dropdown-item">
                        <FaUser /> Manage My Account
                    </Link>
                    <a href="/orders" className="dropdown-item">
                        <FaShoppingBag /> My Orders
                    </a>
                    <a href="/cancellations" className="dropdown-item">
                        <FaTimesCircle /> My Cancellations
                    </a>
                    <a href="/reviews" className="dropdown-item">
                        <FaStar /> My Reviews
                    </a>
                    <a href="/logout" className="dropdown-item">
                        <FaSignOutAlt /> Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default AccountDropdown;

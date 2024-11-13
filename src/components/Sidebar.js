import React from 'react';
import './SidebarBanner.css';
import { FaAngleRight } from 'react-icons/fa';

const Sidebar = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    "Baby's & Toys",
    'Groceries & Pets',
    'Health & Beauty',
  ];

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category} <FaAngleRight className="arrow-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

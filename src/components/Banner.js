import './BannerSlider.css';
import React, { useState, useEffect } from 'react';

const bannerImages = [
  {
    src: '/bannerimg/bann1.jpg',
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
  },
  {
    src: '/bannerimg/a.jpg',
    title: 'New Headphones',
    description: 'Best Sound Quality',
  },
  {
    src: '/bannerimg/bann1.jpg',
    title: 'Smartwatches',
    description: '50% off on select models',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically update the current index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change interval time here (5000ms = 5 seconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Function to go to a specific slide when dot is clicked
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner">
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.title}
          className={currentIndex === index ? 'active' : ''}
        />
      ))}

      {/* Banner Content */}
      <div className="banner-content">
        <h3>{bannerImages[currentIndex].title}</h3>
        <p>{bannerImages[currentIndex].description}</p>
        <button>Shop Now →</button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;

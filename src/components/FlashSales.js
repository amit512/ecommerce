import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import '../styles/FlashSales.css';

const FlashSales = () => {
  // Sample product data (replace with your actual data)
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 200,
      discount: 40,
      rating: 5,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1500,
      discount: 35,
      rating: 4,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'IRIS LCD Gaming Monitor',
      price: 370,
      originalPrice: 500,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'E-Sense Comfort Chair',
      price: 375,
      originalPrice: 500,
      discount: 25,
      rating: 3.5,
    },
  ];

  return (
    <div className="flash-sales">
      <h3 className="section-title">
        <span>Today's</span>
      </h3>
      <div className="products-carousel">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.title} />
              <span className="discount-badge">-{product.discount}%</span>
              <div className="icons">
                <FaHeart className="icon" />
                <FaEye className="icon" />
              </div>
            </div>
            <h4 className="product-title">{product.title}</h4>
            <div className="price-rating">
              <span className="price">${product.price}</span>
              <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;

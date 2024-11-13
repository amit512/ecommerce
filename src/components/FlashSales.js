// FlashSales.js
import React, { useState, useEffect } from 'react';
import './FlashSales.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(timer);
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <span>{String(timeLeft.days).padStart(2, '0')} :</span>
      <span>{String(timeLeft.hours).padStart(2, '0')} :</span>
      <span>{String(timeLeft.minutes).padStart(2, '0')} :</span>
      <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const discountedPrice = (product.originalPrice * (100 - product.discount)) / 100;

  return (
    <div className="product-card">
      <div className="discount-tag">-{product.discount}%</div>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>
        <span className="current-price">Rs.{discountedPrice.toFixed(2)}</span>
        <span className="original-price">Rs.{product.originalPrice}</span>
      </p>
      <p>⭐ {product.rating} ({product.reviews} reviews)</p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

function FlashSales() {
  const products = [
    { id: 1, name: "Bracelet", discount: 40, originalPrice: 1600, rating: 4.5, reviews: 88, image: '/flash/bracelet.jpg' },
    { id: 2, name: "Keyboard", discount: 35, originalPrice: 2000, rating: 4.5, reviews: 75, image: '/flash/dress.jpg' },
    { id: 3, name: "Monitor", discount: 30, originalPrice: 1200, rating: 4.7, reviews: 99, image: '/flash/earring.jpg' },
    { id: 4, name: "Chair", discount: 25, originalPrice: 900, rating: 4.6, reviews: 89, image: '/flash/hat.jpg' },
    { id: 5, name: "Sunglasses", discount: 15, originalPrice: 1500, rating: 4.6, reviews: 89, image: '/flash/sunglasses.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 2;

  const nextSlide = () => {
    if (currentIndex < products.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flash-sales">
      <h2>Today's Flash Sales</h2>
      <Countdown />
      <div className="carousel">
        <button className="nav-btn prev-btn" onClick={prevSlide} disabled={currentIndex === 0}>
          ❮
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-items"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <button className="nav-btn next-btn" onClick={nextSlide} disabled={currentIndex >= products.length - visibleSlides}>
          ❯
        </button>
      </div>
      <button className="view-all">View All Products</button>
    </div>
  );
}

export default FlashSales;

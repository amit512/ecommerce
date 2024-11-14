import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  // Mock data for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: 'dress.jpg' },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: 'earring.jpg' }
  ]);
  const navigate = useNavigate();
  
  const [coupon, setCoupon] = useState('');

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Handle coupon code
  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      alert('Coupon applied successfully!');
    } else {
      alert('Invalid coupon code!');
    }
  };

  // Handle Checkout
  const handleCheckout = () => {
    navigate('/Checkout');
  };

  // Update cart total
  

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <div className="cart-item">
                <img src={require(`../assets/${item.image}`)} alt={item.name} />

                  <span>{item.name}</span>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                >
                  {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-actions">
        <button className="btn return-shop">Return to Shop</button>
        <button className="btn update-cart">Update Cart</button>
      </div>

      <div className="cart-summary">
        <div className="coupon-container">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            value={coupon} 
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button className="btn apply-coupon" onClick={handleApplyCoupon}>
            Apply Coupon
          </button>
        </div>

        <div className="cart-total-box">
  <h3>Cart Total</h3>
  <p>Subtotal: ${calculateSubtotal()}</p>
  <p>Shipping: Free</p>
  <hr />
  <h4>Total: ${calculateSubtotal()}</h4>
  <button className="btn checkout-btn" onClick={handleCheckout}>
    Proceed to Checkout
  </button>
</div>
      </div>
    </div>
  );
};

export default Cart;

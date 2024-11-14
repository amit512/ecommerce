// App.js
import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-page">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />

          <label>Company Name</label>
          <input type="text" placeholder="Company Name" />

          <label>Street Address</label>
          <input type="text" placeholder="Street Address" />

          <label>Apartment, floor, etc. (optional)</label>
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />

          <label>Town/City</label>
          <input type="text" placeholder="Town/City" />

          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" />

          <label>Email Address</label>
          <input type="email" placeholder="Email Address" />

          <div className="save-info">
            <input type="checkbox" />
            <span>Save this information for faster check-out next time</span>
          </div>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="items">
          <div className="item">
            <p>LCD Monitor</p>
            <p>$600</p>
          </div>
          <div className="item">
            <p>4H Gamepad</p>
            <p>$100</p>
          </div>
        </div>

        <div className="summary">
          <p>Subtotal</p>
          <p>$700</p>
        </div>

        <div className="summary">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="summary total">
          <p>Total</p>
          <p>$700</p>
        </div>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" />
            Bank
          </label>
          <label>
            <input type="radio" name="payment" />
            Cash on delivery
          </label>
        </div>

        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;

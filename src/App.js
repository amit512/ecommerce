// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/cart/cart';
import Home from './pages/Home';
import Checkout from './components/checkout/Checkout';
import Account from './pages/Account';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Account/*' element={<Account/>}/>
      </Routes>
    </Router>
  );
};

export default App;

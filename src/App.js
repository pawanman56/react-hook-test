import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  // const [state, function] = useState();
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Items in your cart: {cartItems.toString()}
        </p>
        <button
          onClick={() => {
            // use spread operator to update the value
            setCartItems([...cartItems, 'apple'])
          }} 
        >
          Add to cart
        </button>
      </header>
    </div>
  );
}

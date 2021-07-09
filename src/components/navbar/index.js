import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav id="topbar">
        <div id="left-menu">
          <div id="logo">
            <a href="/index.html">
              <span>Shop</span>lane
            </a>
          </div>
          <a href="#clothing-section">Clothing</a>
          <a href="#accessory-section">Accessories</a>
        </div>
        <div id="search-wrapper">
          <i className="fas fa-search"></i>
          <input
            id="search-box"
            type="text"
            name="search"
            placeholder="Search for Clothing and Accessories"
          />
        </div>
        <div id="right-menu">
          <div id="cart-wrapper">
            <p id="cart-count">0</p>
            <a href="/checkout.html">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <img
            src="https://test-hosting-8f9bf.web.app/assets/avatar.jpg"
            alt="logo"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

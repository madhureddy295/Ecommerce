import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="smart-products">Smart Products</span>
          <h1 className="hero-title">
            Winter Offer
            <br />
            2024 Collection
          </h1>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="hero-image">
          <img 
            src="./Shopping-girl.png" 
            alt="Woman with shopping bags" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-item">
          <img src="./Free-shipping.png" alt="Free Shipping" />
          <div className="feature-text">
            <h3>Free Shipping</h3>
            <p>Free shipping on all order</p>
          </div>
        </div>

        <div className="feature-item">
          <img src="./Support.png" alt="24/7 Support" />
          <div className="feature-text">
            <h3>Support 24/7</h3>
            <p>Free shipping on all order</p>
          </div>
        </div>

        <div className="feature-item">
          <img src="./Money-return.png" alt="Money Return" />
          <div className="feature-text">
            <h3>Money Return</h3>
            <p>Free shipping on all order</p>
          </div>
        </div>

        <div className="feature-item">
          <img src="/order-discount.png" alt="Order Discount" />
          <div className="feature-text">
            <h3>Order Discount</h3>
            <p>Free shipping on all order</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
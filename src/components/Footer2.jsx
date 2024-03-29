import React from 'react';

const Footer2 = () => {
  return (
    <footer className="amazon-footer">
      <div className="amazon-footer__section">
        <h3>Get to Know Us</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="amazon-footer__section">
        <h3>Make Money with Us</h3>
        <ul>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="amazon-footer__section">
        <h3>Amazon Payment Products</h3>
        <ul>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="amazon-footer__section">
        <h3>Let Us Help You</h3>
        <ul>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="amazon-footer__section amazon-footer__section--social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/Amazon">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/amazon">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

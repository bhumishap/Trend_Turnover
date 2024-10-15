import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are a team of dedicated professionals providing top-notch services.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/guide">Guide</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>31 BKC Street, Mumbai</p>
            <p>Email: trendturnover@gmail.com</p>
            <p>Phone: (+91)934738573</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
            <a href="https://www.linkedin.com" className="social-icon">
    <FontAwesomeIcon icon={faYoutube} />
</a>

<a href="https://www.facebook.com" className="social-icon">
    <FontAwesomeIcon icon={faFacebook} />
</a>

<a href="https://www.instagram.com" className="social-icon">
    <FontAwesomeIcon icon={faInstagram} />
</a>

            </div>
          </div>
        </div>
      </div>
      <p className='copyright'>&copy; 2024 trendturnover.com. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

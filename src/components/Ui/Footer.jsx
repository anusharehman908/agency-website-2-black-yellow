import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../../Style/Footer.css'

const Footer = () => {
  return (
    <div className='a'>
      
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <h3>AGENCY</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email:anusharehmanqureshi@gmail.com</p>
          <p>Phone: +03320405516
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. KARACHI AGENCY</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

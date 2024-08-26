import heroDarkImg from'../../images/2.webp'

import React from 'react';
import '../../Style/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={heroDarkImg} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactForm;

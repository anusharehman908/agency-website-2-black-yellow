import React from "react";
import '../../Style/AboutUs.css'; // Ensure you have the CSS file imported

const AboutUs = () => {
  return (
    <div className="a">
      <h1>About Us</h1>
 
    <div className="pricing-section">
      <div className="pricing-card">
        <h2 className="price">$35</h2>
        <p>Per Month, Billed Annually</p>
        <p className="saving">Save $168 per year vs. Monthly!</p>
        <ul className="features">
          <li>Itineraries & Proposals</li>
          <li>CRM, Forms, & Tasks</li>
          <li>Credit Card Auth & Invoicing</li>
          <li>Websites & Landing Pages</li>
          <li>Workflow Automation</li>
        </ul>
        <button className="cta-button">Start Free Trial</button>
        <p className="trial-note">10-day trial. No credit card required!</p>
        <div className="additional-info">
          <p>$25/Month</p>
          <p>Additional Users</p>
        </div>
      </div>

      <div className="pricing-card">
        <h2 className="price">$50</h2>
        <p>Per Month, Billed Annually</p>
        <p className="saving">Save $180 per year vs. Monthly!</p>
        <ul className="features">
          <li>Advanced Itineraries & Proposals</li>
          <li>Advanced CRM, Forms, & Tasks</li>
          <li>Enhanced Credit Card Auth & Invoicing</li>
          <li>Custom Websites & Landing Pages</li>
          <li>Advanced Workflow Automation</li>
        </ul>
        <button className="cta-button">Start Free Trial</button>
        <p className="trial-note">10-day trial. No credit card required!</p>
        <div className="additional-info">
          <p>$30/Month</p>
          <p>Additional Users</p>
        </div>
      </div>

      <div className="pricing-card">
        <h2 className="price">$75</h2>
        <p>Per Month, Billed Annually</p>
        <p className="saving">Save $192 per year vs. Monthly!</p>
        <ul className="features">
          <li>Premium Itineraries & Proposals</li>
          <li>Premium CRM, Forms, & Tasks</li>
          <li>Premium Credit Card Auth & Invoicing</li>
          <li>Premium Websites & Landing Pages</li>
          <li>Premium Workflow Automation</li>
        </ul>
        <button className="cta-button">Start Free Trial</button>
        <p className="trial-note">10-day trial. No credit card required!</p>
        <div className="additional-info">
          <p>$35/Month</p>
          <p>Additional Users</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

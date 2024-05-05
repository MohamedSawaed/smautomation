import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service">
          <h3>Industrial Automation</h3>
          <p>Streamline your manufacturing processes with our cutting-edge industrial automation solutions.</p>
        </div>
        <div className="service">
          <h3>Custom Robotics</h3>
          <p>Enhance efficiency with custom-built robots designed for your specific operational needs.</p>
        </div>
        <div className="service">
          <h3>System Integration</h3>
          <p>Integrate complex systems seamlessly with our expert system integration services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

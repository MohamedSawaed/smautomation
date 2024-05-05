import React from 'react';
import './VisionSection.css';

const VisionSection = () => {
  return (
    <div className="vision-section">
      <h2>Our Vision</h2>
      <p className="tagline">Pioneering the Future of Technology</p>
      <p>
        To be the global leader in robotics and automation technologies, driving innovation and excellence in every sector we touch. We aim to revolutionize industries with cutting-edge solutions that enhance efficiency, sustainability, and connectivity.
      </p>
      <p className="core-values">
        Our core values include innovation, customer focus, and integrity, ensuring that every project and product reflects our commitment to excellence.
      </p>
      <button onClick={() => window.location.href = '#contact'}>Join Our Journey</button>
    </div>
  );
};

export default VisionSection;

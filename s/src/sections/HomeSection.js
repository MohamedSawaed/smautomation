import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <div className="home-section">
      <h1>Welcome to SM.Automation</h1>
      <p>Leading innovations in automation and robotics to transform your business operations.</p>
      <p className="home-subtext">
        At SM.Automation, we specialize in developing state-of-the-art automation solutions that streamline processes and increase efficiency across various industries. From robotics to AI-driven systems, our technologies are designed to meet the dynamic needs of modern businesses.
      </p>
      <button onClick={() => window.location.href = '#contact'}>Contact Us</button>
    </div>
  );
};

export default HomeSection;

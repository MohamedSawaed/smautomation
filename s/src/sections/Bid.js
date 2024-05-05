import React, { useState } from 'react';
import './Bid.css';

const Bid = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Implement functionality to process the bid request here
  };

  return (
    <div className="bid-section">
      <h2>Receive a Bid Now!</h2>
      <p>Fill out the form below to get an immediate response with our best offer.</p>
      <form className="bid-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe your needs"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Bid Request</button>
      </form>
    </div>
  );
};

export default Bid;

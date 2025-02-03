import React, { useState } from 'react';
import './VolunteerFormStep4.css';
import logo from './assets/keelworks-logo.png';

const VolunteerFormStep4 = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    interestReason: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext();
  };

  return (
    <div className="form-container">
      {/* HEADER */}
      <header className="form-header">
        <img src={logo} alt="KeelWorks Logo" className="header-logo" />
        <button className="donate-button">Donate</button>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <div className="form-content">
        <h1>KeelWorks Volunteer</h1>
        <h2>Sign Up</h2>
        <p className="description">
          Join our dedicated team of volunteers and make a lasting impact in our community.
        </p>
        <div className="steps">
          <span className="step completed">✓</span>
          <span className="step completed">✓</span>
          <span className="step completed">✓</span>
          <span className="step active">4</span>
          <span className="step">5</span>
        </div>
        <p className="step-description">Step 4: Tell us more about your interests</p>

        <form onSubmit={handleSubmit}>
          <label>
            <strong>Why are you interested in working with KeelWorks?*</strong>
            <textarea 
              name="interestReason" 
              value={formData.interestReason} 
              onChange={handleChange} 
              required 
              placeholder="Explain why you want to work with our organization" 
            />
          </label>
          <p className="min-words">Min 100 words</p>

          <label>
            <strong>Any other information (optional)</strong>
            <textarea 
              name="additionalInfo" 
              value={formData.additionalInfo} 
              onChange={handleChange} 
              placeholder="Anything else we should know about you" 
            />
          </label>

          {/* Navigation Buttons */}
          <div className="form-navigation">
            <button type="button" className="back-button" onClick={onBack}>Back</button>
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerFormStep4;

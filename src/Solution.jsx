import React from 'react';
import { Link } from 'react-router-dom';
import './Solution.css';

const Solution = () => {
  return (
    <div>
      <h1>Our Solution</h1>

      <div className="solution-container">
        <div className="solution-box">
          <h2>🔍 Intelligent Matching</h2>
          <ul>
            <li>We connect donors with NGOs based on real-time needs using AI-based recommendations.</li>
          </ul>
        </div>

        <div className="solution-box">
          <h2>📦 Smarter Donations</h2>
          <ul>
            <li>Food donations are prioritized by expiry, and item donations are auto-tagged for faster processing.</li>
          </ul>
        </div>

        <div className="solution-box">
          <h2>🛡️ Verified NGOs</h2>
          <ul>
            <li>Our platform uses digital verification and fraud detection to ensure only trusted NGOs are listed.</li>
          </ul>
        </div>

        <div className="solution-box">
          <h2>📈 Transparency & Tracking</h2>
          <ul>
            <li>Donors can track where their help goes with real-time updates and impact reports.</li>
          </ul>
        </div>

        <div className="solution-box">
          <h2>💬 Easy Communication</h2>
          <ul>
            <li>A chatbot answers common questions and helps users learn more about NGOs instantly.</li>
          </ul>
        </div>
      </div>

      {/* Smaller Back to Dashboard Button */}
      <Link to="/dashboard" className="back-btn">Back to Dashboard</Link>
    </div>
  );
};

export default Solution;
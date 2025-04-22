import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const Impact = () => {
  return (
    <div>
      <h1>Impact & Benefits</h1>

      <div className="impact-container">
        <div className="impact-box">
          <h2>🌍 Social Impact</h2>
          <ul>
            <li>Connects small and large NGOs with global supporters.</li>
            <li>Promotes volunteering, item, and food-based contributions.</li>
            <li>Builds long-term partnerships between donors and NGOs.</li>
          </ul>
        </div>

        <div className="impact-box">
          <h2>💰 Economic Impact</h2>
          <ul>
            <li>Secures recurring donations and sponsorships for stability.</li>
            <li>Cuts NGO expenses via mentorship and legal aid volunteers.</li>
            <li>Empowers local communities with skill-based opportunities.</li>
          </ul>
        </div>

        <div className="impact-box">
          <h2>🌱 Environmental Impact</h2>
          <ul>
            <li>Reduces paper waste through digital fundraising.</li>
            <li>Focuses on climate-positive and green initiatives.</li>
            <li>Backs tree planting, food redistribution, and cleanups.</li>
          </ul>
        </div>

        <div className="impact-box">
          <h2>🎯 Target Audience</h2>
          <ul>
            <li>Engages donors, volunteers, and sponsors.</li>
            <li>Uses badges and leaderboards for motivation.</li>
            <li>Enables live donation tracking and reporting.</li>
          </ul>
        </div>
      </div>

      {/* Smaller Back to Dashboard Button */}
      <Link to="/dashboard" className="back-btn">Back to Dashboard</Link>
    </div>
  );
};

export default Impact;
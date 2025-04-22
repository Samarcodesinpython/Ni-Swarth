import React from 'react';
import { Link } from 'react-router-dom';
import './Partner.css';

const Partner = () => {
  return (
    <div>
      <section className="partner-hero">
        <div className="container">
          <h1>Partner With Ni-Swarth</h1>
          <p>Join us to empower communities through AI-driven donations and make meaningful social impact at scale.</p>
          <Link to="#contact" className="btn btn-primary">Get Started</Link>
          <Link to="#benefits" className="btn btn-secondary">Learn More</Link>
        </div>
      </section>

      <section className="partnership-options">
        <div className="container">
          <h2 className="section-title">Partnership Opportunities</h2>
          <div className="options-grid">
            <div className="option-card">
              <div className="card-icon">🏢</div>
              <h3>Corporate Partnerships</h3>
              <p>Align your brand with our cause through giving programs and engagement campaigns.</p>
              <Link to="#" className="card-link">Learn More →</Link>
            </div>
            <div className="option-card">
              <div className="card-icon">🤝</div>
              <h3>Nonprofit Collaborations</h3>
              <p>Amplify your reach with our platform's fundraising and AI matching features.</p>
              <Link to="#" className="card-link">Learn More →</Link>
            </div>
            <div className="option-card">
              <div className="card-icon">💻</div>
              <h3>Technology Partners</h3>
              <p>Join us with your tech and data solutions to boost transparency and impact.</p>
              <Link to="#" className="card-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="container">
          <h2 className="section-title">Why Partner With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📍</div>
              <h3>Impact Mapping</h3>
              <p>We help visualize your social reach and effectiveness in real-time.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Transparent Reporting</h3>
              <p>Track donations, conversions, and impact metrics with live dashboards.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤖</div>
              <h3>AI Optimization</h3>
              <p>Get smart suggestions to optimize where and how you contribute.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🧭</div>
              <h3>Global Reach</h3>
              <p>Tap into our international network of verified NGOs and volunteers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div>Partners Worldwide</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$10M+</div>
              <div>Donations Processed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div>Transparency Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-cta" id="contact">
        <div className="container">
          <h2>Ready to Collaborate?</h2>
          <p>Contact our partnership team to explore how we can make meaningful change together.</p>
          <a href="mailto:partnerships@ni-swarth.org" className="btn btn-primary">Email Us</a>
          <Link to="#" className="btn btn-secondary">Schedule a Call</Link>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Ni-Swarth. All rights reserved.</p>
          <p>A platform for change, a community for growth.</p>
        </div>
      </footer>
    </div>
  );
};

export default Partner;
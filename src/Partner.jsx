import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <>
      <section className="partnerHero">
        <div className="partnerContainer">
          <h1>Partner With Ni-Swarth</h1>
          <p>Join us to empower communities through AI-driven donations and make meaningful social impact at scale.</p>
          <a href="#contact" className="partnerBtn partnerBtnPrimary">Get Started</a>
          <a href="#benefits" className="partnerBtn partnerBtnSecondary">Learn More</a>
        </div>
      </section>

      <section className="partnershipOptions">
        <div className="partnerContainer">
          <h2 className="partnerSectionTitle">Partnership Opportunities</h2>
          <div className="partnerGrid">
            <div className="partnerCard">
              <div className="partnerIcon">🏢</div>
              <h3>Corporate Partnerships</h3>
              <p>Align your brand with our cause through giving programs and engagement campaigns.</p>
              <a href="#" className="partnerLink">Learn More →</a>
            </div>
            <div className="partnerCard">
              <div className="partnerIcon">🤝</div>
              <h3>Nonprofit Collaborations</h3>
              <p>Amplify your reach with our platform's fundraising and AI matching features.</p>
              <a href="#" className="partnerLink">Learn More →</a>
            </div>
            <div className="partnerCard">
              <div className="partnerIcon">💻</div>
              <h3>Technology Partners</h3>
              <p>Join us with your tech and data solutions to boost transparency and impact.</p>
              <a href="#" className="partnerLink">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerBenefits" id="benefits">
        <div className="partnerContainer">
          <h2 className="partnerSectionTitle">Why Partner With Us?</h2>
          <div className="partnerGrid">
            <div className="partnerBenefit">
              <div className="partnerIcon">📍</div>
              <h3>Impact Mapping</h3>
              <p>We help visualize your social reach and effectiveness in real-time.</p>
            </div>
            <div className="partnerBenefit">
              <div className="partnerIcon">📊</div>
              <h3>Transparent Reporting</h3>
              <p>Track donations, conversions, and impact metrics with live dashboards.</p>
            </div>
            <div className="partnerBenefit">
              <div className="partnerIcon">🤖</div>
              <h3>AI Optimization</h3>
              <p>Get smart suggestions to optimize where and how you contribute.</p>
            </div>
            <div className="partnerBenefit">
              <div className="partnerIcon">🧭</div>
              <h3>Global Reach</h3>
              <p>Tap into our international network of verified NGOs and volunteers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerStats">
        <div className="partnerContainer">
          <div className="partnerStatsRow">
            <div className="partnerStatItem">
              <div className="partnerStatNumber">500+</div>
              <div>Partners Worldwide</div>
            </div>
            <div className="partnerStatItem">
              <div className="partnerStatNumber">$10M+</div>
              <div>Donations Processed</div>
            </div>
            <div className="partnerStatItem">
              <div className="partnerStatNumber">100%</div>
              <div>Transparency Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerCta" id="contact">
        <div className="partnerContainer">
          <h2>Ready to Collaborate?</h2>
          <p>Contact our partnership team to explore how we can make meaningful change together.</p>
          <a href="mailto:partnerships@ni-swarth.org" className="partnerBtn partnerBtnPrimary">Email Us</a>
          <a href="#" className="partnerBtn partnerBtnSecondary">Schedule a Call</a>
        </div>
      </section>

      <footer className="partnerFooter">
        <div className="partnerContainer">
          <p>&copy; 2025 Ni-Swarth. All rights reserved.</p>
          <p>A platform for change, a community for growth.</p>
        </div>
      </footer>
    </>
  );
};

export default Partner;

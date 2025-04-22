import React from 'react';
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import the Link component

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-nav">
          <div className="home-logo">Ni-Swarth</div>
          <ul className="home-nav-links">
            <li><Link to="/">Home</Link></li> {/* Use Link for Home */}
            <li><Link to="/about">About</Link></li> {/* Use Link for About */}
            <li><a href="#solution">Solution</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#team">Team</a></li>
            <li className="dropdown">
              <Link to="/ngos">NGOs</Link> {/* Use Link for NGOs - adjust the path if needed */}
              <div className="dropdown-content">
                <Link to="/ngos/browse">Browse NGOs</Link> {/* Use Link */}
                <Link to="/ngos/register">Register NGO</Link> {/* Use Link */}
                <Link to="/ngos/partner">Partner With Us</Link> {/* Use Link */}
              </div>
            </li>
            <li className="dropdown">
              <Link to="/donor">Donor</Link> {/* Use Link for Donor - adjust the path if needed */}
              <div className="dropdown-content">
                <Link to="/donor/upload">Upload an image</Link> {/* Use Link */}
                <Link to="/donor/fund">Monetary Fund</Link> {/* Use Link */}
                <Link to="/donor/history">Donation History</Link> {/* Use Link */}
              </div>
            </li>
            <li><Link to="/signup">Sign up/Login</Link></li> {/* Use Link for Sign up/Login */}
          </ul>
        </div>
      </header>

      <section className="home-hero">
        <div className="hero-image-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Ni-Swarth</h1>
          <p className="hero-tagline">A PLATFORM FOR CHANGE, A COMMUNITY FOR GROWTH 🌱</p>
          <p>Empowering communities with AI-driven donations to create meaningful social impact.</p>
          <a href="#" className="hero-cta-button">Donate Now ❤️</a>
        </div>
      </section>

      <section id="about" className="home-section">
        <h2 className="section-title">About 🤝</h2>
        <p className="section-text">Ni-Swarth is a donation platform integrating AI to match resources with NGO needs, verify legitimacy, and ensure transparency in every contribution.</p>
        <p><Link to="/about" className="learn-more-link">Learn More →</Link></p> {/* Optional: "Learn More" link */}
      </section>

      <section id="solution" className="home-section">
        <h2 className="section-title">Our Solution ♻️</h2>
        <p className="section-text">With AI recommendations, image verification, and smart dashboards, we revolutionize how donations reach those who need them most.</p>
      </section>

      <section id="impact" className="home-section">
        <h2 className="section-title">Impact 🏘️</h2>
        <p className="section-text">Ni-Swarth bridges donors and communities, reduces wastage, and builds lasting collaborations between stakeholders.</p>
      </section>

      <section id="team" className="home-section">
        <h2 className="section-title">Meet the Team 🧑‍💼</h2>
        <div className="team-members">
          <div className="team-member"><h3>Samar Jamal</h3></div>
          <div className="team-member"><h3>Harshita Pokhariya</h3></div>
          <div className="team-member"><h3>Jigansa Satapathy</h3></div>
          <div className="team-member"><h3>Kushagra Dobhal</h3></div>
          <div className="team-member"><h3>Shreya Bansal</h3></div>
          <div className="team-member"><h3>Lavanya Kapoor</h3></div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p>© 2025 Ni-Swarth. All rights reserved. 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
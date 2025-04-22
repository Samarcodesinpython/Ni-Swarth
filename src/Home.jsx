import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  useEffect(() => {
    const revealOnScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const vid = document.getElementById('heroVideo');
      if (vid) vid.pause();
    }
  }, []);

  return (
    <div>
      <header>
        <div className="container">
<<<<<<< Updated upstream
        <nav>
  <div className="logo">Ni-Swarth</div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/solution">Solution</Link></li>
    <li><Link to="/impact">Impact</Link></li>
    <li><Link to="/team">Team</Link></li>
    <li className="dropdown">
      <a href="#">NGOs</a>
      <div className="dropdown-content">
        <Link to="/browse-ngos">Browse NGOs</Link>
        <Link to="/register-ngo">Register NGO</Link>
        <a href="/partner.html" target="_blank">Partner With Us</a>
      </div>
    </li>
    <li className="dropdown">
      <a href="#">Donor</a>
      <div className="dropdown-content">
        <Link to="/upload-image">Upload an image</Link>
        <Link to="/monetary-fund">Monetary Fund</Link>
        <Link to="/donation-history">Donation History</Link>
      </div>
    </li>
  </ul>
</nav>

=======
          <nav>
            <div className="logo">Ni-Swarth</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/solution">Solution</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li className="dropdown">
                <a href="#">NGOs</a>
                <div className="dropdown-content">
                  <Link to="/browse-ngos">Browse NGOs</Link>
                  <Link to="/registerngo">Register NGO</Link>
                  <a href="/partner.html" target="_blank">Partner With Us</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Donor</a>
                <div className="dropdown-content">
                  <Link to="/upload-image">Upload an image</Link>
                  <Link to="/monetary-fund">Monetary Fund</Link>
                  <Link to="/donation-history">Donation History</Link>
                </div>
              </li>
            </ul>
          </nav>
>>>>>>> Stashed changes
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1>Welcome to Ni-Swarth</h1>
          <div className="tagline">A PLATFORM FOR CHANGE, A COMMUNITY FOR GROWTH 🌱</div>
          <p>Empowering communities with AI-driven donations to create meaningful social impact.</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p>© 2025 Ni-Swarth. All rights reserved. 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
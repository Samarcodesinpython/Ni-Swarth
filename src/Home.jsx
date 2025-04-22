import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    // Scroll reveal animation
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
    revealOnScroll(); // Initial check

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);

  useEffect(() => {
    // Mobile video pause logic
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const vid = document.getElementById('heroVideo');
      if (vid) vid.pause();
    }
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">Ni-Swarth</div>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="solution.html">Solution</a></li>
              <li><a href="impact.html">Impact</a></li>
              <li><a href="team.html">Team</a></li>
              <li className="dropdown">
                <a href="#">NGOs</a>
                <div className="dropdown-content">
                  <a href="#">Browse NGOs</a>
                  <a href="register-ngo.html">Register NGO</a>
                  <a href="partner.html" target="_blank">Partner With Us</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Donor</a>
                <div className="dropdown-content">
                  <a href="#">Upload an image</a>
                  <a href="#">Monetary Fund</a>
                  <a href="#">Donation History</a>
                </div>
              </li>
            </ul>
          </nav>
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

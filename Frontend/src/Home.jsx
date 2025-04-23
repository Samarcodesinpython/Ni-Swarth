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

  useEffect(() => {
    // Add the Jotform script dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Add the initialization script
    script1.onload = () => {
      window.addEventListener("DOMContentLoaded", function () {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/01965e04b84d7defa4a1ca7419325d2466b2",
          rootId: "JotformAgent-01965e04b84d7defa4a1ca7419325d2466b2",
          formID: "01965e04b84d7defa4a1ca7419325d2466b2",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #3A5800 0%, #3A5800 100%)",
          buttonBackgroundColor: "#004BB6",
          buttonIconColor: "#F8FEEC",
          variant: false,
          customizations: {
            "greeting": "Yes",
            "greetingMessage": "Hi! How can I assist you?",
            "openByDefault": "No",
            "pulse": "Yes",
            "position": "right",
            "autoOpenChatIn": "0"
          },
          isVoice: false,
        });
      });
    };

    return () => {
      // Cleanup the script after component unmounts
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
          <div className="logo">
           <img src="/Ni-Swarthlogo.jpg" alt="Ni-Swarth Logo" />
         </div>        
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/solution">Solution</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li className="dropdown">
                <a href="#">NGOs</a>
                <div className="dropdown-content">
                  <Link to="/map">Browse NGOs</Link>
                  <Link to="/registerngo">Register NGO</Link>
                  <Link to="/partner">Partner With Us</Link>
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
              <li><Link to="/signup">Signup/Login</Link></li>
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
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/term">Terms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p>© 2025 Ni-Swarth. All rights reserved. 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

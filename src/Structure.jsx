//Ni-Swarth/src/Structure.jsx

import React, { useState } from 'react';
import './Structure.css'; // Import your CSS file

export default function Structure() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setShowDashboard(true);
      // You might want to clear the form fields after successful login
      setUsername('');
      setPassword('');
    } else {
      alert('Please enter both username and password');
    }
  };

  // Function to handle scrolling and revealing sections (can be optimized)
  const handleScroll = () => {
    if (showDashboard) {
      const sections = document.querySelectorAll('.dashboard section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('reveal');
        }
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    handleScroll(); // Initial check on load

    // Mobile video pause logic (converted to React useEffect)
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const vid = document.getElementById('heroVideo');
      if (vid) {
        vid.pause();
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [showDashboard]); // Re-run effect when showDashboard changes

  return (
    <>
      {/* Meta tags and CSS (moved to a separate CSS file and imported) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ni-Swarth - Login</title>

      {!showDashboard ? (
        <div id="loginPage">
          <div className="branding-section">
            <h1 className="branding-title">Ni-Swarth</h1>
            <p className="branding-tagline">
              A Platform for Change, A Community for Growth
            </p>
          </div>
          <div className="login-section">
            <div className="login-container">
              <h2 className="login-title">Welcome Back</h2>
              <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashboard" id="dashboard">
          <header>
            <div className="container">
              <nav>
                <div className="logo">Ni-Swarth</div>
                <ul className="nav-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#solution">Solution</a>
                  </li>
                  <li>
                    <a href="#impact">Impact</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">NGOs</a>
                    <div className="dropdown-content">
                      <a href="#">Browse NGOs</a>
                      <a href="#">Register NGO</a>
                      <a href="#">Partner With Us</a>
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
            <video
              id="heroVideo"
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -2,
              }}
            >
              <source src="videos/ni-swarth-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
                zIndex: -1,
              }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <h1>Welcome to Ni-Swarth</h1>
              <div className="tagline">
                A PLATFORM FOR CHANGE, A COMMUNITY FOR GROWTH 🌱
              </div>
              <p>
                Empowering communities with AI-driven donations to create meaningful
                social impact.
              </p>
              <a href="#" className="cta-button">
                Donate Now ❤️
              </a>
            </div>
          </section>
          <section id="about">
            <h2 className="section-title">About 🤝</h2>
            <p className="section-text">
              Ni-Swarth is a donation platform integrating AI to match resources
              with NGO needs, verify legitimacy, and ensure transparency in every
              contribution.
            </p>
          </section>
          <section id="solution">
            <h2 className="section-title">Our Solution ♻️</h2>
            <p className="section-text">
              With AI recommendations, image verification, and smart dashboards, we
              revolutionize how donations reach those who need them most.
            </p>
          </section>
          <section id="impact">
            <h2 className="section-title">Impact 🏘️</h2>
            <p className="section-text">
              Ni-Swarth bridges donors and communities, reduces wastage, and builds
              lasting collaborations between stakeholders.
            </p>
          </section>
          <section id="team">
            <h2 className="section-title">Meet the Team 🧑‍💼</h2>
            <div className="team-members">
              <div className="team-member">
                <h3>Samar Jamal</h3>
              </div>
              <div className="team-member">
                <h3>Harshita Pokhariya</h3>
              </div>
              <div className="team-member">
                <h3>Jigansa Satapathy</h3>
              </div>
              <div className="team-member">
                <h3>Kushagra Dobhal</h3>
              </div>
              <div className="team-member">
                <h3>Shreya Bansal</h3>
              </div>
              <div className="team-member">
                <h3>Lavanya Kapoor</h3>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <ul className="footer-links">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <p>© 2025 Ni-Swarth. All rights reserved. 🌍</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
import React from 'react';
import './About.css'; // Import the CSS file for About

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Ni-Swarth</h1>
      </header>
      <section className="about-content">
        <p>Ni-Swarth is an AI-driven donation platform dedicated to making contributions more transparent, efficient, and impactful. Whether it's food donations or financial aid, we connect generous donors with verified NGOs to create real change.</p>
        <p>Our platform uses intelligent matching and tracking to ensure that your donations reach those who need them the most. Join us in building a better future.</p>
        <h2>Watch Our Vision</h2>
        <p><a href="https://www.youtube.com/your-youtube-link" target="_blank" rel="noopener noreferrer">Watch the Ni-Swarth Video on YouTube</a></p>
        <div className="about-vision-images">
          <div className="vision-image">
            <img src="/images/donation-box.jpg" alt="Donation Box" /> {/* Replace with your actual image path */}
          </div>
          <div className="vision-image">
            <img src="/images/food-distribution.jpg" alt="Food Distribution" /> {/* Replace with your actual image path */}
          </div>
          <div className="vision-image">
            <img src="/images/community-support.jpg" alt="Community Support" /> {/* Replace with your actual image path */}
          </div>
          <div className="vision-image">
            <img src="/images/children-receiving-aid.jpg" alt="Children Receiving Aid" /> {/* Replace with your actual image path */}
          </div>
        </div>
        <p><a href="/dashboard">← Back to Dashboard</a></p> {/* Assuming you have a dashboard route */}
      </section>
    </div>
  );
}

export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Ni-Swarth</h1>
        <p>
          Ni-Swarth is an AI-driven donation platform dedicated to making contributions more transparent, efficient, and impactful. Whether it's food donations or financial aid, we connect generous donors with verified NGOs to create real change.
        </p>
        <p>
          Our platform uses intelligent matching and tracking to ensure that your donations reach those who need them the most. Join us in building a better future.
        </p>

        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Watch Our Vision</h2>
        <div className="video-link">
          <a href="https://www.youtube.com/watch?v=4pmgqwvopk0" target="_blank" rel="noopener noreferrer">
            Watch the Ni-Swarth Video on YouTube
          </a>
        </div>

        <div className="image-row">
          <img src="https://azbigmedia.com/wp-content/uploads/2013/02/foodbank.jpg" alt="Food Bank" className="oval-image" style={{ animationDelay: '0.1s' }} />
          <img src="https://149797850.v2.pressablecdn.com/wp-content/uploads/2024/04/Website-Photos-14.png" alt="Community Service" className="oval-image" style={{ animationDelay: '0.3s' }} />
          <img src="https://annamrita.org/wp-content/uploads/2021/12/our-goals-mob.png" alt="Our Goals" className="oval-image" style={{ animationDelay: '0.5s' }} />
          <img src="https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/07180112/food-7-March-2024.jpg" alt="Food Donation" className="oval-image" style={{ animationDelay: '0.7s' }} />
        </div>

        <Link to="/" className="back-link">← Back to Dashboard</Link>
        </div>
    </div>
  );
};

export default About;

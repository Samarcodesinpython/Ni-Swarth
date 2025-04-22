import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <header>
        <h1>Meet the Ni-Swarth Team</h1>
      </header>

      <section className="team-container">
        <h2>Our Core Members</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <h3>{member.name}</h3>
              <div className="button-group">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} /> 
                </a>
                <a href={`mailto:${member.email}`} className="btn email">
                  <FontAwesomeIcon icon={faSolidEnvelope} /> 
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>Have questions or want to collaborate? Reach out at: <br /><a href="mailto:contact@niswarth.org">contact@niswarth.org</a></p>
      </section>

      <div className="back-button-container">
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>

      <footer>
        &copy; 2025 Ni-Swarth. All rights reserved.
      </footer>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Samar Jamal',
    linkedin: 'https://www.linkedin.com/in/samar-jamal',
    email: 'samar.jamal@niswarth.org'
  },
  // Add all other team members here...
];

export default Team;
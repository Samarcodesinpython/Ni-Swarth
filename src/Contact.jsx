
import { Link } from 'react-router-dom';
import './Contact.css';
import React from 'react';
const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-logo">Ni-Swarth</div>
      </header>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to get in touch with us. We're here to help!</p>

        <form action="submit_contact_form.php" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

          <div className="form-actions">
            <Link to="/" className="back-home-btn">
              <i className="fas fa-home"></i> Back to Home
            </Link>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <footer className="contact-footer">
        <p>© 2025 Ni-Swarth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

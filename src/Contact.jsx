import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <header>
        <div className="logo">Ni-Swarth</div>
      </header>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to get in touch with us. We're here to help!</p>

        <form action="submit_contact_form.php" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          
          <div className="form-actions">
            <a href="dashboard.html" className="back-home-btn">
              <i className="fas fa-home"></i> Back to Home
            </a>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <footer>
        <p>© 2025 Ni-Swarth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
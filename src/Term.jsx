import React from 'react';
import './Term.css';
import { Link } from 'react-router-dom';

function Term() {
  return (
    <div className="term-container">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to <strong>Ni-Swarth</strong>! By using our platform, you agree to the following terms and conditions that govern your experience with us.
      </p>

      <h2><i className="fas fa-bullseye"></i>1. Purpose of the Platform</h2>
      <p>
        Ni-Swarth acts as a bridge between donors and NGOs. With AI-powered tools, we enhance transparency, traceability, and impact in social donations.
      </p>

      <h2><i className="fas fa-user-check"></i>2. User Responsibilities</h2>
      <p>
        Users must provide accurate information and act responsibly. Any misuse, spamming, or harmful activity will result in account suspension or termination.
      </p>

      <h2><i className="fas fa-user-shield"></i>3. Data Privacy</h2>
      <p>
        Your privacy is a priority. We only collect data necessary for improving your experience. No data will be sold or shared without your clear consent.
      </p>

      <h2><i className="fas fa-hand-holding-usd"></i>4. Donations</h2>
      <p>
        All donations made via Ni-Swarth are voluntary. While we ensure legitimacy of partnered NGOs, Ni-Swarth isn't liable for misuse by third parties.
      </p>

      <h2><i className="fas fa-sync-alt"></i>5. Modifications</h2>
      <p>
        These terms may be updated periodically. We encourage users to check back regularly. Continued use signifies your agreement to updated policies.
      </p>

      <div className="centered">
        <Link to="/" className="back-home-btn">
          <i className="fas fa-home"></i> Back to Home
        </Link>
      </div>

      <footer>
        <p>© 2025 <strong>Ni-Swarth</strong>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Term;

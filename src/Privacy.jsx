import { Link } from 'react-router-dom';
import './Privacy.css';
import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="privacy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: April 22, 2025</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container">
        <div className="privacy-content">
          <div className="intro-text">
            <p>At Ni-Swarth, we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.</p>
          </div>
          
          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect various types of information to provide and improve our services:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number</li>
              <li><strong>Account credentials:</strong> Securely hashed passwords</li>
              <li><strong>Verification documents:</strong> For NGOs and institutional partners</li>
              <li><strong>Uploaded images and metadata:</strong> Related to donation activities</li>
              <li><strong>Location data:</strong> Used only for donation logistics and matching</li>
              <li><strong>Usage behavior:</strong> Cookies, analytics, and platform interaction data</li>
            </ul>
            
            <div className="highlight-box">
              <p>We only collect information that is necessary for providing our services and never sell your personal data to third parties.</p>
            </div>
          </div>
          
          <div className="policy-section">
            <h2>2. How We Use Your Data</h2>
            <p>Your information helps us deliver and improve our services:</p>
            <ul>
              <li>To verify NGO legitimacy and donor identity</li>
              <li>To personalize AI-based donation matching</li>
              <li>To improve our platform's functionality and user experience</li>
              <li>To communicate important service updates</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h3>Data Sharing</h3>
            <p>We only share information when absolutely necessary:</p>
            <ul>
              <li>With verified NGOs when you make a donation (only necessary details)</li>
              <li>With service providers who assist in platform operations (under strict confidentiality)</li>
              <li>When required by law or to protect rights and safety</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>3. Your Rights & Choices</h2>
            <p>You have control over your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from communications</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>4. Data Security</h2>
            <p>We implement robust security measures:</p>
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability testing</li>
              <li>Limited access to personal information</li>
              <li>Secure authentication protocols</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>5. Changes to This Policy</h2>
            <p>We may update this policy periodically. Significant changes will be communicated through our platform or via email.</p>
          </div>
          
          <div className="policy-section">
            <h2>6. Contact Us</h2>
            <p>For privacy-related questions or requests:</p>
            <p>Email: <a href="mailto:privacy@ni-swarth.org">privacy@ni-swarth.org</a></p>
            <p>Mail: Privacy Officer, Ni-Swarth, 123 Impact Way, Social Innovation City</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="privacy-footer">
        <div className="container">
          <p>© 2025 Ni-Swarth. All rights reserved.</p>
          <p><Link to="/dashboard">Back to Home</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
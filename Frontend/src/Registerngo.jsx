import React, { useState } from 'react';
import './Registerngo.css';

const Registerngo = () => {
  const [charRemaining, setCharRemaining] = useState(300);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploads, setFileUploads] = useState({
    registrationProof: null,
    panCard: null
  });

  const handleDescriptionChange = (e) => {
    setCharRemaining(300 - e.target.value.length);
  };

  const handleOtherCheckboxChange = (e) => {
    setShowOtherInput(e.target.checked);
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFileUploads(prev => ({
      ...prev,
      [id]: files[0] ? files[0].name : null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your application! We will review your submission within 3-5 business days.');
      // Reset form would go here
    }, 2000);
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="form-header">
          <h1>Register Your NGO</h1>
          <p>Join our network to connect with donors and amplify your impact</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Basic Information Section */}
          <div className="form-section">
            <h2 className="section-title">Basic Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ngoName" className="required">NGO Name</label>
                <input type="text" id="ngoName" placeholder="e.g. Green Earth Foundation" required />
                <p className="file-hint">Legal registered name</p>
              </div>
              <div className="form-group">
                <label htmlFor="registrationNumber" className="required">Registration Number</label>
                <input type="text" id="registrationNumber" placeholder="12A/123456" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="required">Brief Description</label>
              <textarea 
                id="description" 
                placeholder="Describe your mission, key achievements, and target beneficiaries (max 300 words)" 
                maxLength="300" 
                required
                onChange={handleDescriptionChange}
              ></textarea>
              <div className="char-count">
                <span style={{ color: charRemaining < 50 ? '#ef4444' : '#64748b' }}>
                  {charRemaining}
                </span> characters remaining
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="form-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="required">Email</label>
                <input type="email" id="email" placeholder="contact@yourngo.org" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 XXXXXXXXXX" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address" className="required">Address</label>
                <input type="text" id="address" placeholder="123 Main Street" required />
              </div>
              <div className="form-group">
                <label htmlFor="city" className="required">City</label>
                <input type="text" id="city" placeholder="Your city" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state" className="required">State</label>
                <input type="text" id="state" placeholder="Your state" required />
              </div>
              <div className="form-group">
                <label htmlFor="pincode" className="required">Pincode</label>
                <input type="text" id="pincode" placeholder="123456" required />
              </div>
            </div>
          </div>

          {/* Operational Details Section */}
          <div className="form-section">
            <h2 className="section-title">Operational Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label className="required">Primary Operational Area</label>
                <select id="operationalArea" required>
                  <option value="">Select area</option>
                  <option>Urban</option>
                  <option>Rural</option>
                  <option>Both</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="yearEstablished">Year Established</label>
                <input type="number" id="yearEstablished" placeholder="e.g. 2010" min="1900" max={new Date().getFullYear()} />
              </div>
            </div>

            <div className="form-group">
              <label className="required">Focus Areas</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="focusFood" name="focusArea" value="Food Security" />
                  <label htmlFor="focusFood">Food Security</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="focusEducation" name="focusArea" value="Education" />
                  <label htmlFor="focusEducation">Education</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="focusHealth" name="focusArea" value="Healthcare" />
                  <label htmlFor="focusHealth">Healthcare</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="focusEnvironment" name="focusArea" value="Environment" />
                  <label htmlFor="focusEnvironment">Environment</label>
                </div>
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="focusOther" 
                    name="focusArea" 
                    value="Other" 
                    onChange={handleOtherCheckboxChange}
                  />
                  <label htmlFor="focusOther">Other</label>
                </div>
              </div>
              <input 
                type="text" 
                id="otherFocus" 
                placeholder="Please specify" 
                className={`other-input ${showOtherInput ? 'visible' : ''}`}
              />
            </div>
          </div>

          {/* Verification Documents */}
          <div className="form-section">
            <h2 className="section-title">Verification Documents</h2>
            <div className="form-group">
              <label className="required">Registration Certificate</label>
              <label className="file-upload" style={{
                borderColor: fileUploads.registrationProof ? '#A0522D' : '#cbd5e1',
                backgroundColor: fileUploads.registrationProof ? '#FAF0E6' : 'transparent'
              }}>
                <input 
                  type="file" 
                  id="registrationProof" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  required 
                  onChange={handleFileChange}
                />
                {fileUploads.registrationProof || 'Click to upload file (PDF/JPG/PNG)'}
              </label>
              <p className="file-hint">Max file size: 5MB</p>
            </div>

            <div className="form-group">
              <label>PAN Card</label>
              <label className="file-upload" style={{
                borderColor: fileUploads.panCard ? '#A0522D' : '#cbd5e1',
                backgroundColor: fileUploads.panCard ? '#FAF0E6' : 'transparent'
              }}>
                <input 
                  type="file" 
                  id="panCard" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  onChange={handleFileChange}
                />
                {fileUploads.panCard || 'Click to upload file (PDF/JPG/PNG)'}
              </label>
              <p className="file-hint">Optional but recommended</p>
            </div>
          </div>

          {/* Terms and Submission */}
          <div className="form-section">
            <div className="form-group">
              <div className="checkbox-item">
                <input type="checkbox" id="termsAgreement" required />
                <label htmlFor="termsAgreement" className="required">I agree to the Terms of Service and Privacy Policy</label>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <span className="btn-text">Submit Application</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerngo;
import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your information has been submitted successfully.</p>
      <p>We will contact you soon.</p>
      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  );
}

export default ThankYou; 
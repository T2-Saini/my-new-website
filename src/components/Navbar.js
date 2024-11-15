import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Your Brand Name</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Contact Form</Link>
      </div>
    </nav>
  );
}

export default Navbar; 
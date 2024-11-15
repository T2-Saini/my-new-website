import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomerForm from './components/CustomerForm';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<CustomerForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function CustomerForm() {
  const form = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    emailjs.init('oceClvCLwwLzsisHt');
  }, []);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    to_email: 'shubhamkumar2003.sk@gmail.com'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'shubhamkumar2003.sk@gmail.com',
      from_name: formData.user_name,
      from_email: formData.user_email,
      phone: formData.user_phone,
      message: formData.message
    };
    
    emailjs.sendForm(
      'service_0ivvt1s',
      'template_j5k7ywq',
      form.current,
      'oceClvCLwwLzsisHt'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      navigate('/thank-you');
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert(`Failed to send email. Error: ${error.text}\nPlease check your EmailJS configuration.`);
    });
  };

  return (
    <div className="customer-form-container">
      <h1>Customer Information</h1>
      <form ref={form} onSubmit={handleSubmit} className="customer-form">
        <input
          type="hidden"
          name="to_email"
          value="shubhamkumar2003.sk@gmail.com"
        />

        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Customer Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default CustomerForm; 
// PermissionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PermissionForm = () => {
  const [formData, setFormData] = useState({
    authority: '',
    date: '',
    message: '',
    clubName: '',
    eventName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/permissions', formData);
      alert('Permission granted successfully!');
      setFormData({
        authority: '',
        date: '',
        message: '',
        clubName: '',
        eventName: ''
      });
    } catch (error) {
      console.error('Error granting permission:', error);
      alert('Error granting permission. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Grant Permission</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="authority" value={formData.authority} onChange={handleChange} placeholder="Authority" className="input-field" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" className="input-field" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="input-field" required />
        <input type="text" name="clubName" value={formData.clubName} onChange={handleChange} placeholder="Club Name" className="input-field" required />
        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} placeholder="Event Name" className="input-field" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default PermissionForm;

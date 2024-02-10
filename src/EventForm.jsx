// EventForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    clubName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/events', formData);
      alert('Event created successfully!');
      setFormData({
        name: '',
        date: '',
        time: '',
        venue: '',
        clubName: ''
      });
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input-field" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" className="input-field" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} placeholder="Time" className="input-field" required />
        <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Venue" className="input-field" required />
        <input type="text" name="clubName" value={formData.clubName} onChange={handleChange} placeholder="Club Name" className="input-field" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;

// ClubForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ClubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    professorInCharge: '',
    numberOfStudents: 0,
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/clubs', formData);
      alert('Club created successfully!');
      setFormData({
        name: '',
        professorInCharge: '',
        numberOfStudents: 0,
        image: ''
      });
    } catch (error) {
      console.error('Error creating club:', error);
      alert('Error creating club. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Add Club</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input-field" required />
        <input type="text" name="professorInCharge" value={formData.professorInCharge} onChange={handleChange} placeholder="Professor in Charge" className="input-field" required />
        <input type="number" name="numberOfStudents" value={formData.numberOfStudents} onChange={handleChange} placeholder="Number of Students" className="input-field" required />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="input-field" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ClubForm;

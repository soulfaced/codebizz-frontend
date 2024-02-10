// ProfessorForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProfessorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/professors', formData);
      alert('Professor created successfully!');
      setFormData({
        name: '',
        department: '',
        image: ''
      });
    } catch (error) {
      console.error('Error creating professor:', error);
      alert('Error creating professor. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Add Professor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input-field" required />
        <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="input-field" required />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="input-field" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ProfessorForm;

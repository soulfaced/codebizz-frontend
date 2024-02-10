import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    rollNumber: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', formData);
      alert('Student created successfully!');
      setFormData({
        name: '',
        department: '',
        rollNumber: '',
        email: '',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Error creating student:', error);
      alert('Error creating student. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input-field" required />
        <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="input-field" required />
        <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number" className="input-field" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-field" required />
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="input-field" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;

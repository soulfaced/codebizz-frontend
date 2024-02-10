import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './StudentForm';
import ProfessorForm from './ProfessorForm';
import ClubForm from './ClubForm';
import EventForm from './EventForm';
import PermissionForm from './PermissionForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<StudentForm/>} />
        <Route exact path="/professors" element={<ProfessorForm/>} />
        <Route exact path="/clubs" element={<ClubForm/>} />
        <Route exact path="/events" element={<EventForm/>} />
        <Route exact path="/permissions" element={<PermissionForm/>} />
      </Routes>
    </Router>
  );
};

export default App;

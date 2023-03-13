import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import ProjectDetails from './pages/ProjectDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Private from './components/Private';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Private>
              <Projects />
            </Private>
          }
        />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'; // Fixed casing to match your file
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Impact from './Impact'; 
import Registerngo from './Registerngo';
import Privacy from './Privacy';
import Solution from './Solution';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact" element={<Impact />} /> 
        <Route path="/registerngo" element={<Registerngo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/solution" element={<Solution />} />
        
        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
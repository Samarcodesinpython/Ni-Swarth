// Ni-Swarth/src/App.jsx

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard'; // ✅ import your dashboard
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; // ✅ Import the Home component
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} /> {/* ✅ Home is the landing page */}
        <Route path="/signup" element={<Signup />} /> {/* ✅ Route for Signup */}
        <Route path="/login" element={<Login />} />   {/* ✅ Route for Login */}
        <Route path="/about" element={<About />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard /> {/* ✅ Protected dashboard route */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
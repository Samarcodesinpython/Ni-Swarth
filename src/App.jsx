// Ni-Swarth/src/App.jsx

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Structure from './Structure';
import Dashboard from './Dashboard'; // ✅ import your dashboard
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Structure />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard /> {/* ✅ protected dashboard route */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

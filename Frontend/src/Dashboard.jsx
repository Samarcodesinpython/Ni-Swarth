// Ni-Swarth/src/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import api from './api'; // custom axios instance with token
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/auth/profile')
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.error('Auth failed:', err);
        localStorage.clear();
        navigate('/login');
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to Ni-Swarth Dashboard</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>

          {/* Show content based on role */}
          {user.role === 'Donor' && <p>🧺 You can list new donations here!</p>}
          {user.role === 'NGO' && <p>✅ You can manage donations and logistics</p>}
          {user.role === 'Admin' && <p>🛠 Admin Access: Monitor system and analytics</p>}

          <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  );
}

export default Dashboard;

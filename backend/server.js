// backend/server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import donationRoutes from './routes/donationRoutes.js';
import authRoutes from './routes/authRoutes.js'; // 👈 Import after express
import 'dotenv/config';

const app = express(); // 👈 Define app BEFORE using it

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', donationRoutes);
app.use('/auth', authRoutes); // ✅ Use app AFTER it's defined

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

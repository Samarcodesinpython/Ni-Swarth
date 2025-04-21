// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import donationRoutes from './routes/donationRoutes.js';
import 'dotenv/config'; // For .env files in ES modules
// const require = createRequire(import.meta.url); // If you need require for specific cases

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use donation routes
app.use('/donations', donationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});